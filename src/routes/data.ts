export interface Data {
	prova: string;
	minGrade: number;
	nota: number;
	peso: number;
}

export const data: Data[] = [
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
		peso: 1
	},
	{
		prova: 'Matemática e suas tecnologias',
		minGrade: 0.01,
		nota: 637.9,
		peso: 3
	},
	{
		prova: 'Ciências da Natureza e suas tecnologias',
		minGrade: 0.01,
		nota: 600.2,
		peso: 2
	},
	{
		prova: 'Ciências Humanas e suas tecnologias',
		minGrade: 0.01,
		nota: 581.9,
		peso: 1
	}
];
