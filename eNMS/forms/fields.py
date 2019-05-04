from wtforms import (
    BooleanField,
    FloatField,
    IntegerField,
    SelectField,
    StringField,
    SelectMultipleField,
)
from typing import Any

from eNMS.database import choices


class DateField(StringField):
    pass


class ObjectField(SelectField):
    def __init__(self, model: str, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
        self.choices = choices(model)


class MultipleObjectField(SelectMultipleField):
    def __init__(self, model: str, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
        self.choices = choices(model)


field_types = {
    BooleanField: "boolean",
    DateField: "date",
    FloatField: "float",
    IntegerField: "integer",
    MultipleObjectField: "object-list",
    ObjectField: "object",
    SelectField: "list",
    SelectMultipleField: "multiselect",
}