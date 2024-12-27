import señorAnillos1 from '../img/comunidad_anillo_1.jpg';
import señorAnillos2 from '../img/dos_torres_2.jpg';
import señorAnillos3 from '../img/retorno_rey_3.jpg';
import dune1 from '../img/dune_1.jpg';
import dune2 from '../img/dune_2.jpg';
import dune3 from '../img/dune_3.jpg';
import guardian from '../img/el_guardian.jpg';
import lazarillo from '../img/lazarillo.jpg';
import donQuijote from '../img/don_quijote.jpg';

class Libros {
  static getLibros() {
    return [
      { 
        id: 1, 
        title: 'El Señor de los Anillos: La Comunidad del Anillo', 
        imagen: señorAnillos1, 
        author: 'J.R.R. Tolkien', 
        description: 'El primero de la trilogía épica de fantasía, "La Comunidad del Anillo", que inicia el viaje de Frodo Bolsón y sus compañeros en su misión para destruir el Anillo Único. En un mundo de seres fantásticos como hobbits, elfos, enanos y humanos, la historia profundiza en temas de poder, sacrificio y la lucha entre el bien y el mal, mientras los personajes se enfrentan a una serie de desafíos que pondrán a prueba sus lealtades, convicciones y coraje.'
      },
      { 
        id: 2, 
        title: 'El Señor de los Anillos: Las Dos Torres', 
        imagen: señorAnillos2, 
        author: 'J.R.R. Tolkien', 
        description: 'La segunda entrega de la saga, "Las Dos Torres", sigue a los miembros dispersos de la Comunidad del Anillo mientras luchan por sobrevivir y cumplir con sus misiones. Frodo y Sam continúan su viaje hacia Mordor, mientras que Aragorn, Legolas y Gimli persiguen a los orcos que han capturado a Merry y Pippin. La historia profundiza en las batallas que deciden el destino de los reinos libres de la Tierra Media y la resistencia contra el mal encarnado por Sauron y Saruman.'
      },
      { 
        id: 3, 
        title: 'El Señor de los Anillos: El Retorno del Rey', 
        imagen: señorAnillos3, 
        author: 'J.R.R. Tolkien', 
        description: 'La conclusión épica de la trilogía, "El Retorno del Rey", narra la batalla final por la Tierra Media. Frodo y Sam, con la ayuda de Gollum, se acercan cada vez más a Mordor para destruir el Anillo Único, mientras que Aragorn, Legolas, Gimli y los demás aliados se preparan para la guerra contra las fuerzas de Sauron. La historia culmina en una serie de eventos que decidirán el destino de todos los habitantes de la Tierra Media y el futuro del Anillo.'
      },
      { 
        id: 4, 
        title: 'Dune', 
        imagen: dune1, 
        author: 'Frank Herbert', 
        description: 'La primera novela de la serie "Dune", escrita por Frank Herbert, es una obra maestra de la ciencia ficción que explora temas de política, religión y ecología en un futuro lejano. La historia sigue a Paul Atreides, un joven noble cuya familia toma el control del desértico planeta Arrakis, la única fuente de la especia melange, la sustancia más valiosa del universo. A medida que Paul se adapta a su nuevo entorno, descubre su destino como el Kwisatz Haderach, un mesías profetizado que cambiará el curso de la historia.'
      },
      { 
        id: 5, 
        title: 'Dune: El Mesías de Dune', 
        imagen: dune2, 
        author: 'Frank Herbert', 
        description: 'La segunda novela de la serie "Dune", "El Mesías de Dune", continúa la historia de Paul Atreides, ahora emperador del universo conocido. Mientras enfrenta conspiraciones y desafíos a su reinado, Paul debe lidiar con las consecuencias de sus acciones y las visiones de su futuro. La novela profundiza en los temas de poder, sacrificio y el costo personal de la grandeza.'
      },
      { 
        id: 6, 
        title: 'Dune: Hijos de Dune', 
        imagen: dune3, 
        author: 'Frank Herbert', 
        description: 'La tercera novela de la serie "Dune", "Hijos de Dune", sigue a los hijos de Paul Atreides, Leto II y Ghanima, mientras navegan por las complejidades de la política y el poder en el imperio de su padre. A medida que enfrentan amenazas internas y externas, los gemelos deben tomar decisiones que afectarán el destino de Arrakis y el futuro de la humanidad.'
      },
      { 
        id: 7, 
        title: 'El Guardián entre el Centeno', 
        imagen: guardian, 
        author: 'J.D. Salinger', 
        description: 'Una novela clásica de la literatura estadounidense, "El Guardián entre el Centeno" sigue a Holden Caulfield, un adolescente rebelde que se enfrenta a la alienación y la confusión mientras navega por la transición a la adultez. A través de su narración en primera persona, Holden ofrece una visión cruda y honesta de su mundo y sus luchas internas.'
      },
      { 
        id: 8, 
        title: 'Lazarillo de Tormes', 
        imagen: lazarillo, 
        author: 'Anónimo', 
        description: 'Una obra maestra de la literatura picaresca española, "Lazarillo de Tormes" narra las desventuras de Lázaro, un joven huérfano que sobrevive a través de su ingenio y astucia en una sociedad corrupta. A través de sus experiencias con varios amos, Lázaro ofrece una crítica mordaz de la hipocresía y la injusticia social de su tiempo.'
      },
      { 
        id: 9, 
        title: 'Don Quijote de la Mancha', 
        imagen: donQuijote, 
        author: 'Miguel de Cervantes', 
        description: 'Considerada una de las mayores obras de la literatura mundial, "Don Quijote de la Mancha" sigue las aventuras de Alonso Quijano, un hidalgo que, influenciado por las novelas de caballería, se convierte en el caballero andante Don Quijote. Acompañado por su fiel escudero Sancho Panza, Don Quijote se embarca en una serie de aventuras cómicas y trágicas que exploran temas de realidad, ilusión y la naturaleza de la locura.'
      }
    ];
  }
}

export default Libros;