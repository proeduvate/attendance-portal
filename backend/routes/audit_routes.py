from fastapi import APIRouter
router=APIRouter()
@router.get("/audit_logs")
def logs():
    return []
