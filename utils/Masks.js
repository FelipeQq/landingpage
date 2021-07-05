export const onlyNumbers = (text) => text.split('').filter(letter => letter.match(/\d/))

export const onlyLower = (text) => text.toLowerCase()

export const onlyText = (text) => {
  let validText = [...text].filter(carac => carac.match(/^(ç|Ç|\.|[0-9]|[a-zA-Zà-úÀ-Ú]|\s+)+$/))

  return validText.join('')
}

export const maskPhone = (text) => {
  if (!text) { return '' }

  let numbers = onlyNumbers(text.toString())

  if (numbers.length < 1) { return '' }

  let ddd = numbers.slice(0, 2).join('')
  let prefix = numbers.slice(2, 6).join('')
  let sufix = numbers.slice(6, 11).join('')

  if (sufix.length > 0) { prefix = `${prefix}-` }

  let fone = `(${ddd}) ${prefix}${sufix}`

  if (sufix.length === 5) {
    fone = `${fone.slice(0, 9)}${fone.charAt(10)}-${fone.slice(11)}`
  }

  return fone
}

export const maskCnh = (text) => {
  let numbers = onlyNumbers(text)

  return numbers.join('').slice(0, 11)
}

export const maskCpf = (text) => {
  if (!text) { return '' }
  let numbers = onlyNumbers(text)

  let part1 = numbers.slice(0, 3).join('')
  let part2 = numbers.slice(3, 6).join('')
  let part3 = numbers.slice(6, 9).join('')
  let part4 = numbers.slice(9, 11).join('')

  if (part2.length > 0) { part2 = `.${part2}` }
  if (part3.length > 0) { part3 = `.${part3}` }
  if (part4.length > 0) { part4 = `-${part4}` }

  return `${part1}${part2}${part3}${part4}`
}

export const maskCnpj = (text) => {
  if (!text) { return '' }
  let numbers = onlyNumbers(text)

  let part1 = numbers.slice(0, 2).join('')
  let part2 = numbers.slice(2, 5).join('')
  let part3 = numbers.slice(5, 8).join('')
  let part4 = numbers.slice(8, 12).join('')
  let part5 = numbers.slice(12, 14).join('')

  if (part2.length > 0) { part2 = `.${part2}` }
  if (part3.length > 0) { part3 = `.${part3}` }
  if (part4.length > 0) { part4 = `/${part4}` }
  if (part5.length > 0) { part5 = `-${part5}` }

  return `${part1}${part2}${part3}${part4}${part5}`
}

export const maskText = (entry) => {
  const text = onlyText(entry)

  const capitalize = (name) => name.slice(0, 1).toUpperCase() + name.slice(1)

  // const abrev = (name) => name.includes('.') ? capitalize(name) : name.toLowerCase()
  const minor = (name) => name.includes('.') || name.charAt(0) !== 'd' ? capitalize(name) : name.toLowerCase()

  const formatedText = text.split(' ').map(elem => elem.length < 4 ? minor(elem) : capitalize(elem)).join(' ')

  return formatedText
}

export const capitalize = (text) => text.length > 2 ? `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}` : text

export const maskDate = (date) => date.split('').join('/')

export const maskCep = (cep) => {
  const cepNumbers = onlyNumbers(cep)

  const part1 = cepNumbers.slice(0, 5).join('')
  const part2 = (cepNumbers.length > 5) ? `-${cepNumbers.slice(5, 8).join('')}` : ''

  return `${part1}-${part2}`
}

export const maskPlate = (plate) => {

  const part1 = [...plate.slice(0, 3).toUpperCase()].filter(char => char.match(/[A-Z]/)).join('')
  const part2 = onlyNumbers(plate.slice(3, 4)).join('')
  const part3 = [...plate.slice(4, 5).toUpperCase()].filter(char => char.match(/[A-Z]|\d/)).join('')
  const part4 = onlyNumbers(plate.slice(5, 7)).join('')

  return `${part1}${part2}${part3}${part4}`.toUpperCase()
}

export const maskBankAccount = (account) => {
  const numbers = [...account].filter(letter => letter.match(/[1-9]/)).join('')
  const zeros = numbers.length < 8 ? "0".repeat(8 - numbers.length) : ''

  return `${zeros}${numbers.slice(0, 8)}`.slice(0, 10)

}

export const maskNumber = (text) => {
  if (!text) { return '' }

  return onlyNumbers(text).join('')
}

export const maskBankAgency = (agency) => onlyNumbers(agency).join('').slice(0, 4)

export const maskDoc = (doc) => doc.length > 14 ? maskCnpj(doc) : maskCpf(doc)