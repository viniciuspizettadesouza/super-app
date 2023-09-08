export interface Exercise {
    nome: string;
    series: number;
    repeticoes: number | string;
    extra: string;
    treino: string;
    ordem: string;
}

export interface ExerciseCategory {
    [exerciseName: string]: Exercise[];
}

export const exercises: ExerciseCategory = {
    peitoral: [
        {
            nome: "Supino Reto",
            series: 3,
            repeticoes: 12,
            extra: "Smith",
            treino: "A",
            ordem: "2"
        },
        {
            nome: "Crucifixo Reto",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Supino Inclinado",
            series: 3,
            repeticoes: 12,
            extra: "Smith",
            treino: "A",
            ordem: "1"
        },
        {
            nome: "Crucifixo Inclinado",
            series: 3,
            repeticoes: 12,
            extra: "",
            treino: "A",
            ordem: "4"
        },
        {
            nome: "Cross Over",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Voador",
            series: 3,
            repeticoes: 12,
            extra: "",
            treino: "A",
            ordem: "3"
        },
        {
            nome: "Flexão de Braço",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Supino Declinado",
            series: 0,
            repeticoes: 0,
            extra: "Smith",
            treino: "",
            ordem: ""
        },
        {
            nome: "Pull-over",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Paralelas",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        }
    ],
    costas: [
        {
            nome: "Barra Fixa",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Puxador Frente",
            series: 3,
            repeticoes: 12,
            extra: "",
            treino: "B",
            ordem: "1"
        },
        {
            nome: "Puxador Fechado",
            series: 3,
            repeticoes: 12,
            extra: "",
            treino: "B",
            ordem: "3"
        },
        {
            nome: "Remada Baixa",
            series: 3,
            repeticoes: 12,
            extra: "Drop",
            treino: "B",
            ordem: "2"
        },
        {
            nome: "Remada Articulada",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Voador Dorsal",
            series: 3,
            repeticoes: 12,
            extra: "",
            treino: "B",
            ordem: "4"
        },
        {
            nome: "Hiperextensão Lombar",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Remada Unilateral",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        }
    ],
    membrosInferiores: [
        {
            nome: "Agachamento",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Ag. Smith",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Hack Machine",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Leg Press 45",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Leg Press Horizontal",
            series: 3,
            repeticoes: 12,
            extra: "Pico descida",
            treino: "C",
            ordem: "1"
        },
        {
            nome: "Extensão",
            series: 3,
            repeticoes: 15,
            extra: "Drop",
            treino: "C",
            ordem: "2"
        },
        {
            nome: "Flexão Cadeira",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Mesa Flexora",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Adutor",
            series: 3,
            repeticoes: 15,
            extra: "",
            treino: "C",
            ordem: "3"
        },
        {
            nome: "Abdutor",
            series: 3,
            repeticoes: 15,
            extra: "",
            treino: "C",
            ordem: "4"
        },
        {
            nome: "Panturrilha Sentada",
            series: 4,
            repeticoes: 12,
            extra: "C",
            treino: "5",
            ordem: ""
        },
        {
            nome: "Panturrilha em Pé",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Ag. Bulgaro",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Ag. Sissi",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Stiff",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Elevação Pélvica",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Agachamento com Salto",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        }
    ],
    ombroTrapezio: [
        {
            nome: "Desenv. Máquina",
            series: 3,
            repeticoes: 12,
            extra: "",
            treino: "C",
            ordem: "6"
        },
        {
            nome: "Desenv. Halter",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Elevação Lateral",
            series: 3,
            repeticoes: 12,
            extra: "",
            treino: "C",
            ordem: "8"
        },
        {
            nome: "Elevação Frontal",
            series: 3,
            repeticoes: 12,
            extra: "Anilha",
            treino: "C",
            ordem: "7"
        },
        {
            nome: "Encolhimento de Ombros",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Desenvolvimento Arnold",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Remada Alta",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        }
    ],
    biceps: [
        {
            nome: "Rosca Scott",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Rosca Direta",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Rosca Alternada",
            series: 3,
            repeticoes: 12,
            extra: "",
            treino: "B",
            ordem: "6"
        },
        {
            nome: "Rosca Martelo",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Rosca Inversa",
            series: 3,
            repeticoes: 12,
            extra: "",
            treino: "B",
            ordem: "7"
        },
        {
            nome: "Rosca 21",
            series: 3,
            repeticoes: 21,
            extra: "",
            treino: "B",
            ordem: "5"
        },
        {
            nome: "Rosca Concentrada",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Martelo Alternado",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        }
    ],
    triceps: [
        {
            nome: "Polia Alta",
            series: 3,
            repeticoes: 12,
            extra: "",
            treino: "A",
            ordem: "5"
        },
        {
            nome: "Corda",
            series: 3,
            repeticoes: 12,
            extra: "",
            treino: "A",
            ordem: "5"
        },
        {
            nome: "Testa",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "A",
            ordem: ""
        },
        {
            nome: "Mergulho/Banco",
            series: 3,
            repeticoes: 10,
            extra: "Max rep",
            treino: "A",
            ordem: "7"
        },
        {
            nome: "Francês",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Tríceps Kickback",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Flexão de Braço Diamante",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        }
    ],
    core: [
        {
            nome: "Supra Solo/Crunch Abdominal",
            series: 3,
            repeticoes: 30,
            extra: "Drop",
            treino: "B",
            ordem: "8"
        },
        {
            nome: "Prancha",
            series: 3,
            repeticoes: 60,
            extra: "1 min",
            treino: "A",
            ordem: "8"
        },
        {
            nome: "Elevação de Pernas Suspensas",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Bicicleta no Ar",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Prancha Lateral",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Hiperextensão Lombar",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        },
        {
            nome: "Giro russo",
            series: 0,
            repeticoes: 0,
            extra: "",
            treino: "",
            ordem: ""
        }
    ]
}