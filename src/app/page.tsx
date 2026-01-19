"use client";

import { useState } from "react";

// Check icon component
const CheckIcon = () => (
  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

// Warning icon component
const WarningIcon = () => (
  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
);

// Arrow icon component
const ArrowIcon = () => (
  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

// WhatsApp icon
const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-600">
      <button
        type="button"
        className="w-full py-4 text-left flex justify-between items-center text-white hover:text-gray-300 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const Img = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    referrerPolicy="no-referrer"
    loading="lazy"
  />
);

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0ea3a4] py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Conheça o método capaz de fazer{" "}
            <span className="highlight-pink">o seu bebê dormir a noite inteira</span>, sem precisar deixar ele chorando.
          </h1>
          <p className="text-white text-lg mb-8">
            Esse manual foi feito com muito amor, para que a sua maternidade seja leve e você{" "}
            <strong>não precise mais acordar várias vezes de madrugada</strong>.
          </p>
          <div className="flex justify-center">
            <Img
              src="https://ext.same-assets.com/2831221759/4253184961.webp"
              alt="Manual do Sono Infantil"
              className="max-w-full md:max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg mb-8">
            Veja o que mudou na vida das <strong>mais de 1000 alunas</strong> após o{" "}
            <span className="text-[#e83e8c] font-bold">Manual do sono infantil:</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Img
              src="https://ext.same-assets.com/2831221759/2171202431.webp"
              alt="Depoimento"
              className="w-full rounded-lg shadow-md"
            />
            <Img
              src="https://ext.same-assets.com/2831221759/1298435968.webp"
              alt="Depoimento"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#0ea3a4] py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
            Continue lendo e entenda por que o Manual do sono infantil é o melhor e mais completo do mercado:
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-white">
              <p className="mb-4">
                Meu nome é <strong>Aline Thaisa</strong>, sou consultora{" "}
                <strong>especialista em sono infantil</strong> e criadora do método Play.
              </p>
              <p className="mb-4">
                Através do sono infantil, sou responsável por transformar a vida de mais de 1000 famílias que aplicam a
                minha metodologia e conseguem colocar{" "}
                <strong>seus filhos para dormir todos os dias por até 12 horas seguidas</strong>.
              </p>
              <p>
                O método que eu desenvolvi nesse Manual permite que você consiga ensinar tudo com amor e respeito, para
                que o seu filho não sofra <strong>nenhum tipo de trauma</strong>.
              </p>
            </div>
            <div className="md:w-1/2">
              <Img
                src="https://ext.same-assets.com/2831221759/2835572214.webp"
                alt="Aline Thaisa"
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            <span className="text-[#e83e8c]">O que você vai receber</span> no Manual do Sono infantil:
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="md:w-1/2">
              <p className="mb-6 text-gray-700">
                O Manual do Sono Infantil consiste em um e-book completo + vídeo-aulas práticas, com informações
                valiosas para atender desde recém-nascidos até crianças de 3 anos de idade.
              </p>
              <p className="font-bold mb-4">Você vai aprender:</p>
              <ul className="space-y-2">
                {[
                  "Fundamentos básicos do sono;",
                  "Sonecas;",
                  "Sono noturno;",
                  "Todas as tabelas de janela de sono, quantidade de mamadas, quantidade de sonecas ideal para cada faixa etária;",
                  "Horário para dormir e acordar;",
                  "Educação e Reeducação do sono;",
                  "Como agir durante os saltos;",
                  "Como retirar as associações (peito, mamadeira, presença, ninado, colo);",
                  "Como retirar a cama compartilhada;",
                  "Como realizar desmame noturno;",
                  "Como realizar desmame diurno;",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-bold mt-4">E muito mais...</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Img
                src="https://ext.same-assets.com/2831221759/1332650103.webp"
                alt="E-books do Manual"
                className="max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Without Manual */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <Img
                src="https://ext.same-assets.com/2831221759/1938975729.webp"
                alt="Mãe cansada"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-4">
                O que acontece uma mãe que não coloca o manual em prática:
              </h3>
              <ul className="space-y-3">
                {[
                  { bold: "Acorda de madrugada", text: " várias vezes por causa dos despertares noturnos;" },
                  { bold: "", text: "O bebê só dorme se for ", boldEnd: "no colo ou no peito;" },
                  { bold: "", text: "Se sente ", boldEnd: "exausta", textEnd: " por não conseguir dormir direito;" },
                  { bold: "", text: "A ", boldEnd: "maternidade", textEnd: " se torna difícil e a família vive ", boldEnd2: "cansada e estressada;" },
                  { bold: "", text: "As ", boldEnd: "sonecas são curtas", textEnd: " e com muita resistência;" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <WarningIcon />
                    <span>
                      {item.bold && <strong>{item.bold}</strong>}
                      {item.text}
                      {item.boldEnd && <strong>{item.boldEnd}</strong>}
                      {item.textEnd}
                      {item.boldEnd2 && <strong>{item.boldEnd2}</strong>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Manual */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <Img
                src="https://ext.same-assets.com/2831221759/4050817415.webp"
                alt="Bebê dormindo"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-center mb-4">O que vai acontecer com você após o manual:</h3>
              <ul className="space-y-3">
                {[
                  "O seu bebê vai aprender a dormir com autonomia;",
                  "As sonecas do seu filho serão boas e sem resistência;",
                  "Você e o seu bebê irão dormir a noite inteira, pois ele não irá despertar durante a madrugada;",
                  "A sua família será muito mais unida e feliz;",
                  "A maternidade se torna leve e você vai ganhar mais tempo para cuidar de si;",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Para quem é o <span className="text-[#e83e8c]">Manual do sono infantil?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Gestantes",
                text: "Que desejam aprender com antecedência tudo sobre o sono infantil antes do bebê nascer, evitando stress e cansaços futuros por conta dos horários de sono;",
              },
              {
                title: "Mães de bebês de 0-6 meses",
                text: "Que desejam estabelecer bons hábitos de sono nos primeiros meses de vida do bebê. Ao aplicar as técnicas do manual, seu bebê irá crescer dormindo na hora certa!",
              },
              {
                title: "Mães de bebês/crianças de 7 meses a 3 anos",
                text: "Se o seu filho já tem mais de 6 meses e ainda não dorme no horário certo, o manual irá te mostrar o que fazer para não sofrer com os despertares noturnos.",
              },
              {
                title: "Pais que desejam ensinar com amor",
                text: "No meu método você não encontrará abandono. Pelo contrário, ensinará autonomia com amor e respeito.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckIcon />
                  </div>
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-[#8bc6a8] to-[#7eb89a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            Ao acessar o Manual, você vai levar mais 2 BÔNUS EXCLUSIVOS:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bonus 1 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-center mb-4">
                <span className="text-[#e83e8c]">Bônus 1:</span> E-book com rotinas prontas (de 0 a 4 anos);
              </h3>
              <div className="flex justify-center mb-4">
                <Img
                  src="https://ext.same-assets.com/2831221759/2444981009.webp"
                  alt="E-book de rotinas"
                  className="h-32 object-contain"
                />
              </div>
              <p className="text-sm text-center text-gray-700 mb-4">
                Você irá aprender os <strong>melhores horários para o seu filho dormir, acordar e fazer as sonecas</strong>.
                Além de nunca mais precisar quebrar a cabeça para saber se a rotina do seu filho está adequada ou não. Com esse
                e-book você terá tudo prontinho!
              </p>
              <p className="text-center">
                De <span className="price-strikethrough font-bold">R$47,00</span>{" "}
                <span className="text-green-600 font-bold">vai sair de graça!</span>
              </p>
            </div>

            {/* Bonus 2 */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-center mb-4">
                <span className="text-[#e83e8c]">Bônus 2:</span> + de 15 vídeo-aulas com o passo a passo;
              </h3>
              <div className="flex justify-center mb-4">
                <Img
                  src="https://ext.same-assets.com/2831221759/2364487237.webp"
                  alt="Vídeo-aulas"
                  className="h-32 object-contain"
                />
              </div>
              <p className="text-sm text-center text-gray-700 mb-4">
                O manual do sono infantil é muito mais que um simples manual. Você irá ganhar mais de 15 aulas de bônus com{" "}
                <strong>o passo a passo para fazer a melhor reeducação de sono com o seu filho,</strong> ensinando a retirar as
                principais associações de sono.
              </p>
              <p className="text-center">
                De <span className="price-strikethrough font-bold">R$97,00</span>{" "}
                <span className="text-green-600 font-bold">vai sair de graça!</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-lg mb-8">
            As mães que aplicam o passo a passo do manual conseguem{" "}
            <span className="text-[#e83e8c] font-bold">colocar os filhos para dormir a noite inteira já nos primeiros dias:</span>
          </p>
          <div className="flex justify-center">
            <Img
              src="https://ext.same-assets.com/2831221759/968988810.webp"
              alt="Depoimentos"
              className="max-w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-200">
            <div className="flex justify-center mb-6">
              <Img
                src="https://ext.same-assets.com/2831221759/4253184961.webp"
                alt="Manual do Sono Infantil"
                className="h-40 object-contain"
              />
            </div>
            <ul className="space-y-3 mb-6">
              {[
                { text: "Manual completo", price: "R$147,00" },
                { text: "Vídeo-aulas (passo a passo)", price: "R$103,00" },
                { text: "E-book com rotinas prontas", price: "R$47,00" },
                { text: "Acesso às aulas por 1 ano", price: null },
                { text: "Acesso vitalício ao e-book", price: null },
                { text: "Área de membros exclusiva", price: null },
                { text: "Suporte diretamente comigo", price: null },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3 border-b border-gray-100 pb-2">
                  <ArrowIcon />
                  <span>{item.text}</span>
                  {item.price && <span className="price-strikethrough ml-auto">{item.price}</span>}
                </li>
              ))}
            </ul>
            <p className="text-center text-sm text-gray-600 mb-4">
              Somente nesta página, você terá a chance de garantir essa oportunidade...{" "}
              <strong>Se você sair dessa página, esta oferta não estará mais disponível!</strong>
            </p>
            <p className="text-center mb-2">
              De <span className="price-strikethrough font-bold">R$297,00</span> você vai investir somente...
            </p>
            <p className="text-center text-5xl font-bold text-green-600 mb-2">R$69,77</p>
            <p className="text-center text-sm mb-6">
              ou <strong>9x de R$8,91</strong>
            </p>
            <a
              href="https://pay.hotmart.com/X94795068C?off=1230hw3g&checkoutMode=10"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button w-full block text-center"
            >
              SIM! QUERO MINHAS NOITES DE GLÓRIA
            </a>
            <div className="flex justify-center mt-4">
              <Img
                src="https://ext.same-assets.com/2831221759/2595648649.png"
                alt="Formas de pagamento"
                className="h-12 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Img
            src="https://ext.same-assets.com/2831221759/1323309812.webp"
            alt="Garantia 7 dias"
            className="w-32 h-32 object-contain mx-auto mb-6"
          />
          <p className="text-gray-700 max-w-xl mx-auto">
            Você tem <strong>7 dias de garantia</strong> para entrar no Manual do sono infantil, olhar por dentro, assistir as
            aulas e chegar à conclusão por conta própria se continuar será importante para você ou não.
          </p>
        </div>
      </section>

      {/* WhatsApp Support */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-gray-700 mb-4">
            Se ainda tiver <strong>dúvidas sobre o Manual</strong>, minha equipe está à disposição para tirar suas dúvidas pelo
            nosso canal de atendimento via Whatsapp.{" "}
            <a href="#" className="underline">
              Clique no botão, estamos de esperando
            </a>
            :
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5545999877020&text=Ol%C3%A1,%20preciso%20de%20ajuda%20para%20concluir%20minha%20inscri%C3%A7%C3%A3o%20no%20Manual%20do%20sono%20infantil!"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button inline-flex"
          >
            <WhatsAppIcon />
            FALAR COM ATENDENTE
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-[#4a5568]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Dúvidas comuns</h2>
          <div className="space-y-1">
            <FAQItem
              question="Por quanto tempo terei acesso ao manual?"
              answer="Você terá acesso à plataforma com as aulas gravadas pelo período de 1 ano. No entanto, o acesso ao e-book é vitalício, pois você pode baixar e utilizar para o resto da vida."
            />
            <FAQItem
              question="O Manual é adequado para bebês e crianças de todas as idades?"
              answer="Sim, o método apresentado no manual é adequado para bebês e crianças de todas as idades, desde recém-nascidos até crianças em idade pré-escolar."
            />
            <FAQItem
              question="Quanto tempo leva para ver resultados?"
              answer="O tempo para ver resultados pode variar de acordo com o bebê ou a criança e o grau de dificuldade que eles enfrentam para dormir. No entanto, leva em média 5-6 noites para que o bebê perca uma associação negativa de sono com o método que eu ensino, e assim, já é possível ver melhorias significativas no sono do seu filho."
            />
            <FAQItem
              question="Como irei receber o acesso ao curso?"
              answer="Assim que o seu pagamento for compensado, você receberá um e-mail da hotmart com todas as informações de acesso em até 72 horas."
            />
            <FAQItem
              question="A plataforma de acesso é segura?"
              answer="Sim! A hotmart é a maior plataforma de produtos digitais da América Latina. Seu acesso estará 100% seguro."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-[#3d4654] text-center">
        <p className="text-gray-300 text-sm">ALINE THAISA © | TODOS OS DIREITOS RESERVADOS</p>
      </footer>
    </main>
  );
}
