# Description
A remote attacker could inject arbitrary JavaScript into the application using the package through the comment parameter within \contrat\card.php.



# PoC
```

				print '<tr class="oddeven">';
				print '<td class="nohover">'.$langs->trans("Comment").'</td><td colspan="3" class="nohover" colspan="'.($conf->margin->enabled ? 4 : 3).'"><input size="80" type="text" name="comment" value="'.$_POST["comment"].'"></td>';
				print '<td class="nohover right">';
				print '<input type="submit" class="button" name="activate" value="'.$langs->trans("Activate").'"> &nbsp; ';
				print '<input type="submit" class="button" name="cancel" value="'.$langs->trans("Cancel").'">';
				print '</td>';
				print '</tr>';

				print '</table>';

				print '</form>';


```
