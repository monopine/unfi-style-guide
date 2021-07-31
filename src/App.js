// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page-wrapper">

      <h1>Unifi Protocol Styleguide</h1>

      {/* Branding */}
      <section>
        <h2>Fonts</h2>
        <div className="">
          <span className="block text-lg">Open-Sans</span>
          <ul>
            <li className="font-normal block">Font-Weight 400</li>
            <li className="font-semibold block">Font-Weight 600</li>
            <li className="font-bold block">Font-Weight 700</li>
          </ul>
        </div>
        <h2>Colors</h2>
        <div className="flex flex-row">
          <div className="flex flex-col content-center items-center mr-8">
            <span className="inline-block rounded-2xl w-20 h-20 bg-brand mb-2"></span>
            <span className="">Brand Primary</span>
            <span className="text-sm">rgb(104, 211, 145)</span>
          </div>
          <div className="flex flex-col content-center items-center mr-8">
            <span className="inline-block rounded-2xl w-20 h-20 bg-primary mb-2"></span>
            <span className="">Text Primary</span>
            <span className="text-sm">rgb(26, 32, 44)</span>
          </div>
        </div>
      </section>

      {/* Headings */}
      <section>
        <h2 class="heading">Headings</h2>
        <h1>H1, Heading 1 (60px)</h1>
        <h2>H2, Heading 2 (40px)</h2>
        <h3>H3, Heading 3 (30px)</h3>
        <h4>H4, Heading 4 (20px)</h4>
        <h5>H5, Heading 5 (15px)</h5>
      </section>

      {/* Lists */}
      <section>
        <h2 class="lists">Lists</h2>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
        </ul>

        <ol>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>Item 6</li>
        </ol>
      </section>

      {/* Buttons */}
      <section>
        <h2 class="buttons">Buttons</h2>
        <a href="#" className="btn">Primary Button</a>
        <a href="#" className="btn -secondary">Secondary Button</a>
      </section>

      {/* Links */}
      <section>
        <h2 class="links">Links</h2>
        <a className="link" href="#links">This is a link</a>
      </section>

      {/* Paragraphs */}
      <section>
        <h2 class="paragraphs">Paragraphs</h2>
        <p>Dream of the mind's eye a mote of dust suspended in a sunbeam cosmos descended from astronomers a billion trillion radio telescope. How far away network of wormholes great turbulent clouds extraordinary claims require extraordinary evidence two ghostly white figures in coveralls and helmets are softly dancing with pretty stories for which there's little good evidence. Made in the interiors of collapsing stars paroxysm of global death intelligent beings concept of the number one muse about rich in mystery and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
        <p>Billions upon billions Sea of Tranquility a mote of dust suspended in a sunbeam white dwarf billions upon billions extraplanetary? Stirred by starlight vastness is bearable only through love stirred by starlight gathered by gravity a very small stage in a vast cosmic arena made in the interiors of collapsing stars. Not a sunrise but a galaxyrise how far away hundreds of thousands realm of the galaxies the only home we've ever known brain is the seed of intelligence and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
      </section>

    </div>
  );
}

export default App;
