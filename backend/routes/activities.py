from flask import Blueprint, jsonify
from models import Activity  # Supondo que exista um modelo Activity

activities_bp = Blueprint('activities', __name__)

@activities_bp.route('/activities', methods=['GET'])
def get_activities():
    activities = Activity.query.all()
    result = []
    for activity in activities:
        result.append({
            "id": activity.id,
            "name": activity.name,
            "participants": [participant.name for participant in activity.participants]  # Lista de participantes
        })
    return jsonify(result)
