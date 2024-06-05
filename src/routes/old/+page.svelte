<script lang="ts">
	let prova: string = 'Redação jkhkk';

	let redacaoPeso: number = 1.5,
		redacaoNota: number = 780.0;

	$: redacao = redacaoNota * redacaoPeso;

	let linguagensPeso: number = 1,
		linguagensNota: number = 552.1;

	$: linguagens = linguagensNota * linguagensPeso;

	let matematicaPeso: number = 3,
		matematicaNota: number = 637.9;

	$: matematica = matematicaNota * matematicaPeso;

	let cnPeso: number = 2,
		cnNota: number = 600.2;

	$: cn = cnNota * cnPeso;

	let chPeso: number = 1,
		chNota: number = 581.9;

	$: ch = chNota * chPeso;

	$: pesoSum = chPeso + cnPeso + matematicaPeso + linguagensPeso + redacaoPeso;

	let mathGrade = [800, 850, 900, 950];
	let arr = [
		{
			prova: 'Redação',
			minGrade: 0.01,
			nota: redacaoNota,
			peso: redacaoPeso
		},
		{
			prova: 'Linguagens, Códigos e suas tecnologias',
			minGrade: 0.01,
			nota: linguagensNota,
			peso: linguagensPeso
		},
		{
			prova: 'Matemática e suas tecnologias',
			minGrade: 0.01,
			nota: matematicaNota,
			peso: matematicaPeso
		},
		{
			prova: 'Ciências da Natureza e suas tecnologias',
			minGrade: 0.01,
			nota: cnNota,
			peso: cnPeso
		},
		{
			prova: 'Ciências Humanas e suas tecnologias',
			minGrade: 0.01,
			nota: chNota,
			peso: chPeso
		}
	];
	
</script>

<h1>Calculadora do ENEM</h1>
<p>
	Esta calculadora serve para você entender que se tivesse aprendido matemática não teria tirado
	essa nota paia 💩
</p>
<table>
	<tr>
		<th>Prova do Enem</th>
		<th>Nota mínima</th>
		<th>Sua nota</th>
		<th>Peso</th>
		<th>Sua nota com peso</th>
	</tr>
	{#each arr as materia}
		<tr>
			<td>{materia.prova}</td>
			<td><input type="number" placeholder="0.01" bind:value={materia.minGrade} /></td>
			<td><input type="number" placeholder="780.00" bind:value={materia.nota} /></td>
			<td><input type="number" placeholder="1.50" bind:value={materia.peso} /></td>
			<td><!-- 1.170,00 -->{materia.nota * materia.peso}</td>
		</tr>
	{/each}

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
		<td>{arr[0].peso + arr[1].peso + arr[2].peso + arr[3].peso + arr[4].peso}(A)</td>
		<td
			>{arr[0].nota * arr[0].peso +
				arr[1].nota * arr[1].peso +
				arr[2].nota * arr[2].peso +
				arr[3].nota * arr[3].peso +
				arr[4].nota * arr[4].peso}(B)</td
		>
	</tr>
	<td
		><i
			>Nota do estudante (B/A) = {(arr[0].nota * arr[0].peso +
				arr[1].nota * arr[1].peso +
				arr[2].nota * arr[2].peso +
				arr[3].nota * arr[3].peso +
				arr[4].nota * arr[4].peso) /
				(arr[0].peso + arr[1].peso + arr[2].peso + arr[3].peso + arr[4].peso)}</i
		></td
	>
</table>

<p>Caso você tivesse acertado 30 questões em matemática sua nota seria:</p>
{(arr[0].nota * arr[0].peso +
	arr[1].nota * arr[1].peso +
	mathGrade[0] * arr[2].peso +
	arr[3].nota * arr[3].peso +
	arr[4].nota * arr[4].peso) /
	(arr[0].peso + arr[1].peso + arr[2].peso + arr[3].peso + arr[4].peso)}
<p>Caso você tivesse acertado 35 questões em matemática sua nota seria:</p>
{(arr[0].nota * arr[0].peso +
	arr[1].nota * arr[1].peso +
	mathGrade[1] * arr[2].peso +
	arr[3].nota * arr[3].peso +
	arr[4].nota * arr[4].peso) /
	(arr[0].peso + arr[1].peso + arr[2].peso + arr[3].peso + arr[4].peso)}
<p>Caso você tivesse acertado 40 questões em matemática sua nota seria:</p>
{(arr[0].nota * arr[0].peso +
	arr[1].nota * arr[1].peso +
	mathGrade[2] * arr[2].peso +
	arr[3].nota * arr[3].peso +
	arr[4].nota * arr[4].peso) /
	(arr[0].peso + arr[1].peso + arr[2].peso + arr[3].peso + arr[4].peso)}
<p>Caso você tivesse acertado 45 questões em matemática sua nota seria:</p>
{(arr[0].nota * arr[0].peso +
	arr[1].nota * arr[1].peso +
	mathGrade[3] * arr[2].peso +
	arr[3].nota * arr[3].peso +
	arr[4].nota * arr[4].peso) /
	(arr[0].peso + arr[1].peso + arr[2].peso + arr[3].peso + arr[4].peso)}
