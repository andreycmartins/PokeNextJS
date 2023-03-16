import Image from "next/image";

export default function About() {
  return (
    <div>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio mollitia accusantium quam aliquam
        veritatis. Velit quasi quisquam, aspernatur asperiores corporis debitis quod ut ad, voluptas sit
        cupiditate explicabo voluptatum?
      </p>
      <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"/>
    </div>
  )
}
