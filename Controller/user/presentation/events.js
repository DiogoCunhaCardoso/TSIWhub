let loadedEvents = [];

function loadEventsFromLocalStorage() {
    loadedEvents = [];

    for (let i = 1; i <= 4; i++) {
        const eventDetailsJson = localStorage.getItem(`eventDetails${i}`);
        if (eventDetailsJson) {
            const eventDetails = JSON.parse(eventDetailsJson);

            // Construct each event object
            let event = {
                img: eventDetails.image || defaultImages[i - 1],
                title: eventDetails.title || defaultTitles[i - 1],
                subtitle: eventDetails.subtitle || defaultSubtitles[i - 1],
                textBox1: eventDetails.textBox1 || defaultTextBox1[i - 1]
            };
            loadedEvents.push(event);
        } else {
            loadedEvents.push({
                img: defaultImages[i - 1],
                title: defaultTitles[i - 1],
                subtitle: defaultSubtitles[i - 1],
                textBox1: defaultTextBox1[i - 1]
            });
        }
    }

    eventsData = loadedEvents;
}

function displayEvents() {
    loadEventsFromLocalStorage();

    // Loop through each event and update the corresponding HTML elements
    for (let i = 1; i <= loadedEvents.length; i++) {
        const event = loadedEvents[i - 1];

        // Update image
        const imgContainer = document.getElementById(`event${i}Image`);
        if (imgContainer) {
            const imgElement = imgContainer.querySelector('img');
            if (imgElement && event.img) {
                imgElement.src = event.img;
            }
        }

        // Update title
        const titleElement = document.getElementById(`event${i}Title`);
        if (titleElement) {
            titleElement.textContent = event.title;
        }

        // Update subtitle
        const subtitleElement = document.getElementById(`event${i}Subtitle`);
        if (subtitleElement) {
            subtitleElement.textContent = event.subtitle;
        }

        // Update textBox1
        const textBox1Element = document.getElementById(`event${i}TextBox1`);
        if (textBox1Element) {
            textBox1Element.textContent = event.textBox1;
        }
    }

    console.log(localStorage);
}

const defaultTitles = [
    "Dia da Esmad", 
    "Doutoramento em Criação Artística", 
    "Hackathon Intermediartes", 
    "Festival HaHaArt"
];

const defaultSubtitles = [
    "A Escola Superior de Media Artes e Design do Politécnico do Porto celebra o oitavo aniversário.", 
    "Candidaturas ao doutoramento em Criação Artística, uma parceria com a Universidade de Aveiro.", 
    "Abertura de cinco vagas externas para o laboratório de criação multidisciplinar do Intermediartes.", 
    "A Escola Superior de Media Artes e Design recebe a apresentação do Festival Internacional de Cinema de Comédia do Pombal."
];

const defaultImages = [
    "https://www.esmad.ipp.pt/noticias/dia-da-esmad-4/image",
    "https://www.esmad.ipp.pt/noticias/candidaturas-ao-doutoramento-em-criacao-artistica/image",
    "https://www.esmad.ipp.pt/noticias/open-call-hackathon-intermediartes/image",
    "https://www.esmad.ipp.pt/noticias/apresentacao-do-hahaart-film-festival/image"
];

const defaultTextBox1 = [
    "No dia 27 de maio de 2024 celebra-se o aniversário da Escola Superior de Media Artes e Design do Politécnico do Porto. 14h30 - Receção dos Convidados | 14h45 - Off Limits Orchestra interpreta Cinema, Rodrigo Leão (arranjo de Estela Alexandre), Haja o que houver, Madredeus (arranjo de Estela Alexandre), Porto Sentido, Rui Veloso (arranjo de Clara Lacerda) | 15h15 - Sessão de Abertura Presidente da ESMAD - Olívia Marques da Silva Presidente da AE ESMAD - Luís Silva Vice-Presidente da Câmara Municipal da Póvoa de Varzim - Luís Diamantino Vereador da Câmara Municipal de Vila do Conde - Paulo Vasques Vice-Presidente do Politécnico do Porto - António Marques | 16h00 - Entrega de Diploma do Mérito Académico | 16h05 - Apresentações Virtuais de Media Artes e Design | 16h45 - Encerramento da Sessão",
    "As candidaturas ao Programa Doutoral em Criação Artística da Universidade de Aveiro (UA), em associação com o Politécnico do Porto (ESMAE e ESMAD) e com o Politécnico de Leiria (IPL), decorrem de 27 de maio a 12 de junho de 2024.", 
    "O Hackathon InterMediArtes (HIMA) é um laboratório de criação multidisciplinar que relaciona as artes com as tecnologias emergentes.", 
    "No dia 20 de maio de 2024, pelas 14h30, a Escola Superior de Media Artes e Design recebe Manuel Oliveira, Diretor do HaHaArt Film Festival para uma apresentação do festival, bem como exibição do filme Nada nas Mãos, de Paolo Marinou-Blanco."
];

document.addEventListener('DOMContentLoaded', displayEvents);