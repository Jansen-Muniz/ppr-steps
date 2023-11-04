import { useState } from "react"

const steps = [
  {
    id: crypto.randomUUID(),
    description: "Entender o problema do cliente"
  },
  {
    id: crypto.randomUUID(),
    description: "Desenvolver a solução do problema",
  },
  {
    id: crypto.randomUUID(),
    description: "Repetir até o cliente ficar feliz e encher seu 🍑 de dinheiro",
  },
]

const App = () => {
  const [shouldBeOpen, setShouldBeOpen] = useState(true)
  const [step, setStep] = useState(1)

  const handleClickToogle = () => setShouldBeOpen(s => !s)
  const handlePrevStep = () => setStep(s => s - 1 === 0 ? s : s - 1)
  const handleNextStep = () => setStep(s => s === steps.length ? s : s + 1)

  return (
    <>
      <div className="container-close">
        <button className="close" onClick={handleClickToogle}>
          {shouldBeOpen ? 'Fechar' : 'Abrir'}
        </button>
      </div>

      {shouldBeOpen && (
        <div className="steps">
          <ul className="numbers">
            {steps.map((item, i) => (
              <li key={item.id} className={i + 1 === step ? 'active' : ''}>
                {i + 1}
              </li>
            ))}
          </ul>

          <h3 className="message">
            Passo {step} : {steps[step - 1].description}
          </h3>

          <div className="buttons">
            <button onClick={handlePrevStep}>Anterior</button>
            <button onClick={handleNextStep}>Próximo</button>
          </div>
        </div>
      )}
    </>
  )
}

export { App }
