# dropdownSelect
Make Bootstrap 4 dropdown menus out of select inputs. 

It's as easy as:
<pre>
&lt;select class="form-control" name="select2" id="select2">
     &lt;option value="1"&gt; Option 1 &lt;/option&gt;
     &lt;option value="2"&gt; Option 2 &lt;/option&gt;
     &lt;option value="3"&gt; Option 3 &lt;/option&gt;
     &lt;option value="4"&gt; Option 4 &lt;/option&gt;
&lt;/select>
</pre>

Add the css to hide the select fields and handle the text alignment. You might have to change the margins of the arrows if your padding isn't the same as the default Bootstrap padding on form fields.
<pre>
&lt;link rel="stylesheet" href="path/to/dropdownSelect.css"&gt;
</pre>

Add the dropdownSelect.js.
<pre>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="path/to/dropdownSelect.js"></script>
</pre>

Then apply the function to all select input fields:
<pre>
$('select.form-control').dropdownSelect();
</pre>
