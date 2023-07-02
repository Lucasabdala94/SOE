export const formatTime = (inputValue) => {
  // Aplicar el formato "minutos:segundos:milisegundos"
  let formattedTime = inputValue.replace(/\D/g, '') // Eliminar caracteres no numéricos
  if (formattedTime.length > 7) {
    formattedTime = formattedTime.slice(0, 7) // Limitar a 7 caracteres
  }
  formattedTime = formattedTime.replace(/(\d{2})(\d{2})(\d{3})/, '$1:$2.$3')
  return formattedTime
}
export const convertTime = (inputValue) => {
  /* crea el dato tipo hora */
  let formattedTime = inputValue.replace(/\D/g, '') // Eliminar caracteres no numéricos
  if (formattedTime.length > 7) {
    formattedTime = formattedTime.slice(0, 7) // Limitar a 7 caracteres
  }
  const tiempo = new Date()

  const min = formattedTime.replace(/(\d{2})/, '$1')
  const seg = formattedTime.replace(/(\d{2})(\d{2})/, '$2')
  const miliseg = formattedTime.replace(/(\d{2})(\d{2})(\d{3})/, '$3')

  tiempo.setMinutes(min)
  tiempo.setSeconds(seg)
  tiempo.setMilliseconds(miliseg)
  return tiempo
}
