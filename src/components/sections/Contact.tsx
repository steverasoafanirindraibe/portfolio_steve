import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { FaEnvelope, FaLinkedin, FaGithub, FaGlobe, FaStarHalfAlt, FaUser, FaComment, FaPaperPlane, FaStar } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import AnimatedSection from '@/components/AnimatedSection';
import { useModernAlert } from '@/components/ModernAlert';

export default function Contact() {
  const { t } = useTranslation();
  const { showAlert } = useModernAlert();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_g7rknfn',
    TEMPLATE_TO_YOU: 'template_92k46ri', 
    TEMPLATE_AUTO_REPLY: 'template_vz9h3rv', 
    USER_ID: 'MK-TmMeFEG4l1LxG_'
  };

  const handleCopy = async () => {    
    try {
      await navigator.clipboard.writeText("steveshannyrasoafanirindraibe@gmail.com");
      showAlert("Copié avec succes", "success")
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = "steveshannyrasoafanirindraibe@gmail.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_TO_YOU,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Steve Rasoafanirindraibe',
          reply_to: formData.email
        },
        EMAILJS_CONFIG.USER_ID
      );
      
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_AUTO_REPLY,
        {
          to_name: formData.name,
          to_email: formData.email,
          from_name: 'Steve Rasoafanirindraibe', 
          reply_to: 'steveshannyrasoafanirindraibe@gmail.com'
        },
        EMAILJS_CONFIG.USER_ID
      );

      showAlert(t('contact.success'), "success");

      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      showAlert(t('contact.error'), "error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <footer id='contacts' className='footer h-auto sm:h-screen w-full' >
      <div className='footer-section w-full h-auto sm:h-[90%] items-center rounded-b-[30px] sm:rounded-b-[50%] py-8 sm:py-0' >
        <AnimatedSection direction='scale' threshold={0.3} delay={0.1} duration={0.8}>
          <div className='text-2xl sm:text-4xl text-center pt-4 sm:pt-8 pb-3' >
            <span className="text-orange-500">&lt;</span>
            <span>Contact</span>
            <span className="text-orange-500">/&gt;</span>
          </div>
          <div className='text-center pb-6 sm:pb-8 text-xs sm:text-sm text-gray-300 px-4'>{t("contact.subtitle")}</div>
        </AnimatedSection>
        <div className='flex flex-col sm:flex-row px-4 sm:px-0' >
          <div className='w-full sm:w-1/3 mb-8 sm:mb-0 sm:pr-16' >
            <AnimatedSection direction='up' threshold={0.1} delay={0.3} duration={0.3} className='flex justify-center sm:justify-end py-2'> 
              <button 
                className='flex justify-center items-center group py-2 px-3 bg-black/30 border-2 border-white rounded-full hover:bg-teal-500 hover:text-black hover:border-teal-500 transition-all duration-700 ease-out cursor-copy text-xs sm:text-sm'
                onClick={handleCopy}
              >
                <FaEnvelope className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' />
                <div className='pl-2 group-hover:pl-0 transition-all duration-700 ease-out truncate max-w-[250px] sm:max-w-none'>steveshannyrasoafanirindraibe@gmail.com</div>
                <FaStar className='w-0 h-2 group-hover:w-2 transition-all duration-700 ease-out' />
              </button>
            </AnimatedSection>
            <AnimatedSection direction='up' threshold={0.1} delay={0.6} duration={0.3} className=' flex justify-center sm:justify-end py-2' > 
              <a 
                href='https://fr.linkedin.com/'
                className='flex justify-center items-center group py-2 px-3 text-xs sm:text-sm bg-black/30  border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer' 
              >
                <FaLinkedin className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' ></FaLinkedin> 
                <div className='pl-2 group-hover:pl-0 transition-all duration-700 ease-out truncate max-w-[250px] sm:max-w-none'>Steve Shanny Rasoafanirindraibe </div>
              </a>
            </AnimatedSection>
            <AnimatedSection direction='up' threshold={0.1} delay={0.8} duration={0.2} className=' flex justify-center sm:justify-end py-2' > 
              <a 
                href='https://github.com/steverasoafanirindraibe' 
                className='flex justify-center items-center group py-2 px-3 text-xs sm:text-sm bg-black/30 border-2 border-white rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-out cursor-pointer' 
              >
                <FaGithub className='group-hover:w-0 transition-all duration-700 ease-out size-3 sm:size-4' ></FaGithub> 
                <div className='pl-2 group-hover:pl-0 transition-all duration-700 ease-out' >steve_rasoafanirindraibe </div>
              </a>
            </AnimatedSection>
            <AnimatedSection direction='scale' threshold={0.1} delay={1} duration={0.1}>
              <div className='w-full flex justify-center sm:justify-end items-center py-2' > 
                <FaGlobe className='mx-2  text-xs sm:text-sm' ></FaGlobe> 
                <div className=' text-xs sm:text-sm' >Remote Worldwide</div>
              </div>
              <div className='w-full flex justify-center  sm:justify-end' >- <FaStarHalfAlt className=' text-sm sm:text-xl mx-2' ></FaStarHalfAlt> -</div>
            </AnimatedSection>
          </div>
          
          <div className='w-full sm:w-2/3' >
            <AnimatedSection direction='left' threshold={0.1} delay={0.4} duration={0.8} className='w-full flex sm:justify-left'>
              <form onSubmit={handleSubmit} className='w-full sm:w-4/5 max-w-md bg-black/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl'>
                
                {/* Champ Nom */}
                <div className='mb-4 group'>
                  <div className='flex items-center mb-2'>
                    <FaUser className='text-teal-400 mr-2 text-sm' />
                    <label htmlFor='name' className='text-white text-xs sm:text-sm font-medium'>
                      {t("contact.name")}
                    </label>
                  </div>
                  <input 
                    id='name'
                    name='name'
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full text-xs sm:text-sm bg-black/40 border border-white/30 rounded-xl py-2 px-4 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-500 outline-none'
                    placeholder='Martin Dupont'
                  />
                </div>

                {/* Champ Email */}
                <div className='mb-4 group'>
                  <div className='flex items-center mb-2'>
                    <FaEnvelope className='text-teal-400 mr-2 text-sm' />
                    <label htmlFor='email' className='text-white text-xs sm:text-sm font-medium'>
                      {t("contact.email")}
                    </label>
                  </div>
                  <input 
                    id='email'
                    name='email'
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full bg-black/40 text-xs sm:text-sm border border-white/30 rounded-xl py-2 px-4 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-500 outline-none'
                    placeholder='martindupon@example.com'
                  />
                </div>

                {/* Champ Message */}
                <div className='mb-6 group'>
                  <div className='flex items-center mb-2'>
                    <FaComment className='text-teal-400 mr-2 text-sm' />
                    <label htmlFor='message' className='text-white text-xs sm:text-sm font-medium'>
                      {t("contact.message")}
                    </label>
                  </div>
                  <textarea 
                    id='message'
                    name='message'
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='w-full bg-black/40 text-xs sm:text-sm border border-white/30 rounded-xl py-2 px-4 text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-500 outline-none resize-none'
                    placeholder={t('contact.placeholder')}
                  ></textarea>
                </div>

                {/* Bouton d'envoi */}
                <button 
                  type="submit"
                  disabled={isLoading}
                  className={`w-full group flex justify-center items-center py-2 px-6 rounded-xl text-white font-semibold transition-all duration-500 ease-out shadow-lg ${
                    isLoading 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-teal-600 to-teal-600 hover:from-teal-700 hover:to-teal-500 hover:border-teal-300'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className='mr-2 text-xs sm:text-sm group-hover:rotate-45 transition-transform duration-500' />
                      <span>{t("contact.send")}</span>
                      <FaStar className='ml-2 w-0 group-hover:w-4 transition-all duration-700 ease-out' />
                    </>
                  )}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
      <div className='w-full h-auto sm:h-[10%] flex justify-center items-center py-4 sm:py-0' >
        <div className="text-black text-[10px] sm:text-sm text-center px-4">
          <p>&copy; 2024 <strong>Steve Rasoafanirindraibe</strong>. {t("copyright.text")}</p>
        </div>
      </div>
    </footer>
  );
}