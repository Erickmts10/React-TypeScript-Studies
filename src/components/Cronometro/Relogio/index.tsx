import style from './Relogio.module.scss';

interface prop {
  tempo:number | undefined
  finalizarTarefas:() => void
}

export default function Relogio({tempo = 0}: prop) {
  const minuto = Math.floor(tempo / 60)
  const segundo = tempo % 60
  const [minutoDezena, minutoUnidade] = String(minuto).padStart(2,"0")
  const [segundoDezena, segundoUnidade] = String(segundo).padStart(2,"0")
  return (
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  )
}