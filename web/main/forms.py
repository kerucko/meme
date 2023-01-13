from .models import Marks
from django.forms import ModelForm, TextInput

class MarksForm(ModelForm):
    class Meta:
        model = Marks
        fields = ['marks', 'memes', 'unique_id']
        widgets = {
            'marks': TextInput(attrs={
                'id': 'Marks',
                'class': 'my_form'
            }),
            'memes': TextInput(attrs={
                'id': 'Memes',
                'class': 'my_form'
            }),
            'unique_id': TextInput(attrs={
                'id': 'ID',
                'class': 'my_form'
            })

        }