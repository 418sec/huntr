# Overview

`summernote` is a super simple WYSIWYG Editor, this package is vulnerable to Cross-site Scripting (XSS). It is possible to inject malicious JavaScript within the `myforms` area due to lack of sanitization.

# Proof of Concept

```
from crispy*forms.helper import FormHelper
from crispy_forms.layout import Submit, Column, Row, Layout
from django.forms import HiddenInput
from django.utils.translation import ugettext as *
from django import forms
from django_summernote.widgets import SummernoteInplaceWidget

from myapp.models import MyModel

class MyForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super(MyForm, self).__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.layout = Layout(
            Row(Column('title', css_class='form-group col-md-6'), css_class='form-row'),
            Row(Column('base_template', css_class='form-group col-md-12'), css_class='form-row'),
            Row(Column('base_css_template', css_class='form-group col-md-6', ), css_class='form-row'),
            'doc',
            Submit('submit', _('Save'))
        )

    class Meta:
        model = MyModel
        fields = '__all__'
        widgets = {
            'base_template': SummernoteInplaceWidget(attrs={'summernote': {'width': '100%', 'height': '600px'}}),
            'document_type': HiddenInput()
        }
        labels = {
            'title': _('Title'),
            'base_template': _('Body'),
            'base_css_template': _('CSS stylesheet (optional)'),
            'doc': _('Doc'),
        }
```
