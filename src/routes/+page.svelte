<script lang="ts">
	let redacaoPeso: number, redacaoNota: number;

	$: redacao = redacaoNota * redacaoPeso;

	let linguagensPeso: number, linguagensNota: number;

	$: linguagens = linguagensNota * linguagensPeso;

	let matematicaPeso: number, matematicaNota: number;

	$: matematica = matematicaNota * matematicaPeso;

	let cnPeso: number, cnNota: number;

	$: cn = cnNota * cnPeso;

	let chPeso: number, chNota: number;

	$: ch = chNota * chPeso;
</script>

<h1>Calculadora do ENEM</h1>
<p>
	Esta calculadora serve para você entender que se tivesse aprendido matemática não teria tirado
	essa nota veia 💩
</p>

Insira sua tabela aki...
<table>
	<tr>
		<th>Prova do Enem</th>
		<th>Nota mínima</th>
		<th>Sua nota</th>
		<th>Peso</th>
		<th>Sua nota com peso</th>
	</tr>
	<tr>
		<td>Redação</td>
		<td><input type="number" placeholder="0.01" /></td>
		<td><input type="number" placeholder="780.00" bind:value={redacaoNota} /></td>
		<td><input type="number" placeholder="1.50" bind:value={redacaoPeso} /></td>
		<td><!-- 1.170,00 -->{redacao}</td>
	</tr>
	<tr>
		<td>Linguagens, Códigos e suas tecnologias</td>
		<td><input type="number" placeholder="0.01" /></td>
		<td><input type="number" placeholder="552.10" bind:value={linguagensNota}/></td>
		<td><input type="number" placeholder="1.00" bind:value={linguagensPeso} /></td>
		<td><!--552,10 --> {linguagens}</td>
	</tr>
	<tr>
		<td>Matemática e suas tecnologias</td>
		<td><input type="number" placeholder="0.01" /></td>
		<td><input type="number" placeholder="637.90" bind:value={matematicaNota}/></td>
		<td><input type="number" placeholder="3.00" bind:value={matematicaPeso}/></td>
		<td><!-- 1.913,70 --> {matematica}</td>
	</tr>
	<tr>
		<td>Ciências da Natureza e suas tecnologias</td>
		<td><input type="number" placeholder="0.01" /></td>
		<td><input type="number" placeholder="600.20" bind:value={cnNota}/></td>
		<td><input type="number" placeholder="2.00" bind:value={cnPeso} /></td>
		<td><!--1.200,40--> {cn}</td>
	</tr>
	<tr>
		<td>Ciências Humanas e suas tecnologias</td>
		<td><input type="number" placeholder="0.01" /></td>
		<td><input type="number" placeholder="581.90" bind:value={chNota} /></td>
		<td><input type="number" placeholder="1.00" bind:value={chPeso} /></td>
		<td><!--581,90-->{ch}</td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
		<td>Total</td>
		<td>Total</td>
	</tr>
	<tr>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		<td>8,50(A)</td>
		<td>5.418,10(B)</td>
	</tr>
	<td><i>Nota do estudante (A+B) = 637,42</i></td>
</table>
