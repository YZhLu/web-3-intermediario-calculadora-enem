<script lang="ts">
	import { data, type Data } from './data';

	let mathGrade: number[][] = [
		[30, 714, 800, 879],
		[35, 760, 850, 932],
		[40, 820, 900, 978],
		[45, 950, 970, 986]
	];

	let arr: Data[] = data;

	function calcularNota(materia: Data) {
		return (materia.nota * materia.peso).toFixed(2);
	}

	function calcularScore(arr: Data[]) {
		return arr.reduce((total, subject) => {
			return (total + subject.peso * subject.nota);
		}, 0);
	}

	function calcularSomaDosPesos(arr: Data[]) {
		return arr.reduce((sum, subject) => {
			return Math.round(sum + subject.peso);
		}, 0);
	}

	function calcularScoreFinal(arr: Data[]) {
		return (calcularScore(arr) / calcularSomaDosPesos(arr));
	}

	function calcularSimulation(arr: Data[], math: number) {
		const simuArr = JSON.parse(JSON.stringify(arr)).map((n: Data) =>
			n.prova === 'Matemática e suas tecnologias' ? { ...n, nota: math } : n
		);

		return calcularScoreFinal(simuArr);
	}
</script>

<h1>Calculadora do ENEM</h1>
<p>
	Esta calculadora serve para você entender que se tivesse aprendido matemática não teria tirado
	essa nota paia 💩
</p>

<table>
	<tr>
		<th>Prova do Enem</th><th>Nota mínima</th><th>Sua nota</th><th>Peso</th><th>Nota com peso</th>
	</tr>
	{#each arr as materia}
		<tr>
			<td>{materia.prova}</td>
			<td><input type="number" placeholder="0.01" bind:value={materia.minGrade} /></td>
			<td><input type="number" placeholder="780.00" bind:value={materia.nota} /></td>
			<td><input type="number" placeholder="1.50" bind:value={materia.peso} /></td>
			<td>{calcularNota(materia)}</td>
		</tr>
	{/each}

	<tr>
		<td /><td /><td>Total</td><td>Total</td>
	</tr>
	<tr>
		<td /><td /><td>{calcularScore(arr).toFixed(2)}(A)</td><td>{calcularSomaDosPesos(arr).toFixed(2)}(B)</td>
	</tr>
	<td><i>Nota do estudante (B/A) = {calcularScoreFinal(arr).toFixed(2)}</i></td>
</table>
<h3>Com base nos dados entre 2020 e 2023</h3>
{#each mathGrade as m}
	<p>Caso você tivesse acertado {m[0]} questões em matemática sua nota seria:</p>
	Entre {calcularSimulation(arr, m[1]).toFixed(2)} e {calcularSimulation(arr, m[3]).toFixed(2)}
	<br>
	com média de {calcularSimulation(arr, m[2]).toFixed(2)}
{/each}
