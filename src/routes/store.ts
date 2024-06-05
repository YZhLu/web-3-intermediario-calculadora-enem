import { writable /* , derived */ } from 'svelte/store';

const initialState = [
	{
		prova: 'Redação',
		minGrade: 0.01,
		nota: 780.0,
		peso: 1.5
	},
	{
		prova: 'Linguagens, Códigos e suas tecnologias',
		minGrade: 0.01,
		nota: 552.1,
		peso: 1.0
	},
	{
		prova: 'Matemática e suas tecnologias',
		minGrade: 0.01,
		nota: 637.9,
		peso: 3.0
	},
	{
		prova: 'Ciências da Natureza e suas tecnologias',
		minGrade: 0.01,
		nota: 600.2,
		peso: 2.0
	},
	{
		prova: 'Ciências Humanas e suas tecnologias',
		minGrade: 0.01,
		nota: 581.9,
		peso: 1.0
	}
];

export type Data = {
	prova: string;
	minGrade: number;
	nota: number;
	peso: number;
};

// interface State {
//     essay: Data;
//     ling: Data;
//     math: Data;
//     nat: Data;
//     human: Data;
// }

type GradeKey = keyof typeof initialState;
//type Atribute = keyof typeof initialState;

function createGrade() {
	const { subscribe, set, update } = writable(initialState);

	return {
		subscribe,
		getProvaScore: (prova: GradeKey) => {
			let element;
			let score;
			subscribe((state) => {
				element = state.find((s) => s.prova === prova);
				if (element) score = element.nota * element.peso;
			})();
			return score;
		},
		getTotalScore: () => {
			let total = 0;
			subscribe((state) => {
				state.forEach((subject) => {
					total += subject.peso * subject.nota;
				});
			})();
			return total;
		},
		getPesoSum: () => {
			let sum = 0;
			subscribe((state) => {
				state.forEach((subject) => {
					sum += subject.peso;
				});
			})();
			return sum;
		},
		updateAtribute: <K extends keyof Data>(i: number, atribute: K, value: Data[K]) =>
			update((state) => {
				// console.log(state[prova][atribute], value); // = value;

				state[i][atribute] = value;
				return state;
			}),
		// getProvaScore,

		//increment: () => update((n) => n + 1),
		// decrement: () => update((n) => n - 1),
		reset: () => set(initialState)
	};
}

export const grade = createGrade();

// export const notasStore = writable(initialState);

// export const redacao = derived(
// 	notasStore,
// 	($notasStore) => $notasStore.redacao.nota * $notasStore.redacao.peso
// );
// export const linguagens = derived(
// 	notasStore,
// 	($notasStore) => $notasStore.linguagens.nota * $notasStore.linguagens.peso
// );
// export const matematica = derived(
// 	notasStore,
// 	($notasStore) => $notasStore.matematica.nota * $notasStore.matematica.peso
// );
// export const cn = derived(notasStore, ($notasStore) => $notasStore.cn.nota * $notasStore.cn.peso);
// export const ch = derived(notasStore, ($notasStore) => $notasStore.ch.nota * $notasStore.ch.peso);

// export const pesoSum = derived(
// 	notasStore,
// 	($notasStore) =>
// 		$notasStore.redacao.peso +
// 		$notasStore.linguagens.peso +
// 		$notasStore.matematica.peso +
// 		$notasStore.cn.peso +
// 		$notasStore.ch.peso
// );
