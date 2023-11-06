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
const Steps = ({ shouldBeOpen, step, onClickNext, onClickPrevious }) =>
  shouldBeOpen && (
    <>
      <div className="steps">
        <ul className="numbers">
          {steps.map((item, i) => (
            <li key={item.id} className={i + 1 === step ? 'active' : ''}>
              {i + 1}
            </li>
          ))}
        </ul>

        <h3 className="message">
          Passo {step}: {steps[step - 1].description}
        </h3>

        <div className="buttons">
          <button onClick={onClickPrevious}>Anterior</button>
          <button onClick={onClickNext}>Próximo</button>
        </div>
      </div>
    </>
  )

const Toggle = ({ shouldBeOpen, onClickToggle }) => (
  <div className="container-close">
    <button className="close" onClick={onClickToggle}>
      {shouldBeOpen ? 'Fechar' : 'Abrir'}
    </button>
  </div>
)

const App = () => {
  const [shouldBeOpen, setShouldBeOpen] = useState(true)
  const [step, setStep] = useState(1)

  const handleClickToggle = () => setShouldBeOpen(s => !s)
  const handleClickNext = () => setStep(s => s === steps.length ? s : s + 1)
  const handleClickPrevious = () => setStep(s => s - 1 === 0 ? s : s - 1)

  return (
    <>
      <Toggle
        shouldBeOpen={shouldBeOpen}
        onClickToggle={handleClickToggle}
      />

      <Steps
        shouldBeOpen={shouldBeOpen}
        step={step}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
      />
    </>
  )
}

export { App }
