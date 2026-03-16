from fastapi import APIRouter
from fastapi.responses import FileResponse
from database import intern_collection, attendance_collection

from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

router = APIRouter()


@router.get("/export/{id}")
def export_pdf(id: str):

    intern = intern_collection.find_one(
        {"intern_id": id},
        {"_id": 0}
    )

    attendance = list(
        attendance_collection.find(
            {"intern_id": id}
        )
    )

    present = 0
    absent = 0
    leave = 0

    for a in attendance:

        if a["status"] == "PRESENT":
            present += 1

        elif a["status"] == "ABSENT":
            absent += 1

        else:
            leave += 1

    file = f"{id}_report.pdf"

    c = canvas.Canvas(file, pagesize=letter)

    c.drawString(50, 750, "Intern Attendance Report")

    c.drawString(50, 720, "Name : " + str(intern["name"]))

    c.drawString(50, 700, "ID : " + str(intern["intern_id"]))

    c.drawString(50, 680, "Department : " + str(intern["department"]))

    c.drawString(50, 650, "Present : " + str(present))

    c.drawString(50, 630, "Absent : " + str(absent))

    c.drawString(50, 610, "Leave : " + str(leave))

    c.save()

    return FileResponse(
        file,
        media_type="application/pdf",
        filename=file
    )
