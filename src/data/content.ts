// ⚠️ CONTENIDO DE EJEMPLO — reemplazar por datos reales antes de lanzar.
// Todo lo que ves acá (marca, modelos, precios, testimonios) es ficticio,
// pensado solo para tener un punto de partida visual y funcional.

export const brand = {
	name: "Rodado",
	claim: "Tu moto de trabajo, sin banco.",
	whatsapp: "5493516474574",
};

export const audiences = [
	"Delivery y reparto",
	"Mensajería",
	"Técnicos a domicilio",
	"Comerciantes",
	"Conductores de apps",
];

export const steps = [
	{
		n: "01",
		title: "Contanos a qué te dedicás",
		body: "Un formulario corto, menos de 5 minutos. Nos contás en qué app trabajás y cuánto generás por día.",
	},
	{
		n: "02",
		title: "Evaluamos tu actividad",
		body: "Miramos tu desempeño real, no tu historial bancario. La mayoría de nuestros usuarios nunca calificó para un crédito tradicional.",
	},
	{
		n: "03",
		title: "Armamos tu plan",
		body: "Anticipo accesible y cuotas semanales, alineadas a como cobrás vos.",
	},
	{
		n: "04",
		title: "Retirás la moto y arrancás",
		body: "Lista para trabajar desde el primer día. Cada cuota te acerca a que sea 100% tuya.",
	},
];

export type Model = {
	id: string;
	brand: string;
	name: string;
	image: string;
	cashPrice: number;
	downPaymentInstallments: { count: number; amount: number };
	weeklyInstallment: number;
	termWeeks: number;
};

// Precios y modelos ficticios — solo para maquetar el catálogo y el simulador.
export const models: Model[] = [
	{
		id: "urbana-110",
		brand: "Kelva",
		name: "Urbana 110",
		image: "/models/urbana-110.svg",
		cashPrice: 2_450_000,
		downPaymentInstallments: { count: 3, amount: 165_000 },
		weeklyInstallment: 28_500,
		termWeeks: 78,
	},
	{
		id: "work-150",
		brand: "Kelva",
		name: "Work 150",
		image: "/models/work-150.svg",
		cashPrice: 3_180_000,
		downPaymentInstallments: { count: 3, amount: 210_000 },
		weeklyInstallment: 36_900,
		termWeeks: 78,
	},
	{
		id: "cargo-160",
		brand: "Bemtral",
		name: "Cargo 160",
		image: "/models/cargo-160.svg",
		cashPrice: 3_690_000,
		downPaymentInstallments: { count: 3, amount: 245_000 },
		weeklyInstallment: 42_300,
		termWeeks: 78,
	},
];

export const stats = [
	{
		value: "+1M",
		label: "personas trabajan en apps de delivery y transporte en Argentina",
	},
	{
		value: "60%",
		label:
			"de quienes piden una moto de trabajo no califica para un crédito bancario",
	},
	{
		value: "2,5×",
		label: "más entregas estimadas por día al pasar de bici a moto propia",
	},
];

export const testimonials = [
	{
		name: "Nombre Apellido",
		role: "Repartidor, PedidosYa",
		quote:
			"Texto de testimonio de ejemplo. Acá va una frase real de un usuario sobre cómo le cambió el trabajo tener su propia moto.",
	},
	{
		name: "Nombre Apellido",
		role: "Conductor, Uber",
		quote:
			"Otro testimonio de ejemplo, a reemplazar por casos reales una vez que haya usuarios.",
	},
];

export const faqs = [
	{
		q: "¿Es un préstamo bancario?",
		a: "No. Es un contrato de leasing: usás la moto para trabajar desde el día uno y cada cuota te acerca a que sea tuya.",
	},
	{
		q: "¿Necesito recibo de sueldo?",
		a: "No es un requisito excluyente. Evaluamos tu actividad real en las apps en las que trabajás.",
	},
	{
		q: "¿Qué pasa si una semana genero menos?",
		a: "Contenido de ejemplo — acá conviene explicar con precisión la política real de mora/gracia antes de publicar.",
	},
];
