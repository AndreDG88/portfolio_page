import { useRef } from 'react'
import emailjs from 'emailjs-com'
import styles from './Contact.module.css'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Contact() {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm(
        'service_71ht4wj',       // <-- substitua aqui
        'template_c55txmk',      // <-- substitua aqui
        form.current,
        'a4_UGBTa_NfeaqPlQ'        // <-- substitua aqui
      )
      .then(
        () => {
          alert('Mensagem enviada com sucesso!')
          form.current?.reset()
        },
        (error) => {
          alert('Erro ao enviar. Tente novamente.')
          console.error(error)
        }
      )
  }

  return (
    <section className={styles.contactSection} id="contact">
      <a
        href="https://wa.me/5521996344600"
        target="_blank"
        rel="noreferrer"
        className={styles.whatsappButton}
      >
        <span className={styles.iconMarginRight}>
          <FaWhatsapp size={20} />
        </span>
        Falar no WhatsApp
      </a>

      <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
        <label htmlFor="name">Nome:</label>
        <motion.input 
          type="text"
          name="name"
          required
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }} 
        />

        <label htmlFor="email">E-mail:</label>
        <motion.input
          type="email"
          name="email"
          required
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />

        <label htmlFor="message">Mensagem:</label>
        <motion.textarea
          name="message"
          placeholder="Digite sua mensagem"
          required
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        />

        <button type="submit">Enviar Mensagem</button>
      </form>
    </section>
  )
}

export default Contact

