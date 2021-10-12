import md5 from 'md5'
import config from '../../config'

const gravatar = (email) => {
  const base = config.GRAVATAR.URL
  const formatteEmail = email.trim().toLowerCase()
  const hash = md5(formatteEmail, { encoding: 'binary' })

  return `${base}${hash}`

}

export default gravatar
