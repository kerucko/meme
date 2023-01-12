from django.db import models

class Marks(models.Model):
    marks = models.CharField('Marks', max_length=200)
    memes = models.CharField('Memes', max_length=250)
    unique_id = models.CharField('ID', max_length=10)

    def __str__(self):
        return self.unique_id

    class Meta:
        verbose_name = 'Результат оценивания'
        verbose_name_plural = 'Результаты оценивания'