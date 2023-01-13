from .models import Marks
from django.forms import ModelForm, TextInput

class MarksForm(ModelForm):
    class Meta:
        model = Marks
        fields = ['marks', 'memes', 'unique_id']
        widgets = {
            'marks': TextInput(attrs={
                'placeholder': 'marks',
                'id': 'Marks'
            }),
            'memes': TextInput(attrs={
                'placeholder': 'memes',
                'id': 'Memes'
            }),
            'unique_id': TextInput(attrs={
                'placeholder': 'ID',
                'id': 'ID'
            })

        }