import { NewBookInfo } from '../Types'

export const INITIAL_STATE:NewBookInfo[] = [
  {
    id: 'AtomicHabits',
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg',
    intro: 'The book draws on proven behavior change ideas from biology, psychology, and neuroscience and explains them in a way that is easy to understand and apply. It also includes dozens of new stories and insights that I\'ve never written about before.',
    completed: true,
    review: 'personal growth'
  },
  {
    id: 'ElLibroNegrodelasHoras',
    title: 'El Libro Negro de las Horas',
    author: 'Eva García Sáenz',
    cover: 'https://images-na.ssl-images-amazon.com/images/I/81PFtvKlQTL.jpg',
    intro: 'Alguien que lleva muerto cuarenta años no puede ser secuestrado y, desde luego, no puede sangrar.',
    completed: false,
    review: 'Libro de Terror'
  },
  {
    id: 'Adióspequeño',
    title: 'Adiós, pequeño',
    author: 'HUERTA, MÁXIMO',
    cover: 'https://images-na.ssl-images-amazon.com/images/I/81XW54g4I9L.jpg',
    intro: 'Desgarrador testimonio de un escritor enfrentado a la más dura de sus narraciones, la de su propia vida. Asaltado por los recuerdos mientras cuida a su madre enferma, el pasado se le presenta con vacíos que no logra llenar.',
    completed: true,
    review: 'Premio de Novela Fernando Lara 2022'
  },
  {
    id: 'ElPrincipito',
    title: 'El Principito',
    author: 'SAINT-EXUPÉRY, ANTOINE DE',
    cover: 'https://fraternidadrosacruzantigua.org/wp-content/uploads/2021/06/El-principito.jpg',
    intro: 'Interroga acerca de la relación del ser humano con su prójimo y con el mundo, El Principito concentra, con maravillosa simplicidad, la constante reflexión de Saint-Exupéry sobre la amistad, el amor, la responsabilidad y el sentido de la vida.',
    completed: false,
    review: 'Fábula mítica y relato filosófico'
  }

]
