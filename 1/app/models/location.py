from app import db
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid

class Locations(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, nullable=False)
    name = db.Column(db.String(230), nullable=False)

    def __repr__(self):
        return '<Location {}>'.format(self.name)