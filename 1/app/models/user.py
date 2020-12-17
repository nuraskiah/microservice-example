from app import db
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid

class Users(db.Model):
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, nullable=False)
    email = db.Column(db.String(120), index=True, unique=True, nullable=False)

    def __repr__(self):
        return '<User {}>'.format(self.name)
