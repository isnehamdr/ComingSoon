// import React from 'react'
// import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'

// // Put your image in the project's `public` folder (e.g. public/door.jpg)
// // and set its path here. Set to '' to show the lattice pattern instead.
// const doorImage = '/images/hero.jpeg'

// // TODO: replace the "#" links with the hotel's real social profiles
// const socials = [
//   { name: 'Facebook', href: '#', Icon: FaFacebookF },
//   { name: 'Instagram', href: '#', Icon: FaInstagram },
//   { name: 'WhatsApp', href: '#', Icon: FaWhatsapp },
//   { name: 'YouTube', href: '#', Icon: FaYoutube },
// ]

// // Diamond lattice shown inside the arch when there is no image
// const lattice = {
//   backgroundImage:
//     'linear-gradient(45deg, rgba(201,162,75,.28) 1px, transparent 1px), linear-gradient(-45deg, rgba(201,162,75,.28) 1px, transparent 1px)',
//   backgroundSize: '1.6rem 1.6rem',
//   backgroundPosition: 'center',
// }

// const Comingsoon = () => {
//   return (
//     <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(120%_90%_at_80%_20%,#332015,#25160f)] px-5 py-8 font-['Karla',system-ui,sans-serif] text-[#f3ead7]">
//       {/* Google fonts */}
//       <style>{`@import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Karla:wght@400;500&display=swap');`}</style>

//       <div className="grid w-full max-w-6xl grid-cols-1 items-center justify-items-center gap-10 text-center lg:grid-cols-[1.25fr_1fr] lg:justify-items-stretch lg:gap-16 lg:text-left">
//         {/* Text */}
//         <div>
//           <p className="mb-5 font-['Marcellus',Georgia,serif] text-base text-[#c9a24b] sm:text-xl">
//             Thamel Heritage Hotel &amp; Spa
//           </p>

//           <h1 className="mb-4 font-['Marcellus',Georgia,serif] text-[clamp(2.4rem,8vw,4.5rem)] font-normal leading-[1.08] tracking-[0.01em]">
//             Our doors open soon.
//           </h1>

//           <p className="mx-auto mb-8 max-w-[34rem] text-base leading-relaxed text-[#b9a98f] sm:text-lg lg:mx-0">
//             We are putting the finishing touches on our rooms and spa in the heart of Thamel,
//             Kathmandu. Follow us to hear when bookings open.
//           </p>

//           <ul
//             aria-label="Social media"
//             className="flex flex-wrap justify-center gap-3.5 lg:justify-start"
//           >
//             {socials.map(({ name, href, Icon }) => (
//               <li key={name}>
//                 <a
//                   href={href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label={name}
//                   className="grid h-[2.9rem] w-[2.9rem] place-items-center rounded-full border border-[#c9a24b] text-lg text-[#c9a24b] transition-colors hover:bg-[#c9a24b] hover:text-[#25160f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f3ead7]"
//                 >
//                   <Icon aria-hidden="true" />
//                 </a>
//               </li>
//             ))}
//           </ul>

//           <p className="mt-8 text-sm text-[#b9a98f]">
//             © {new Date().getFullYear()} Thamel Heritage Hotel &amp; Spa
//           </p>
//         </div>

//         {/* Arched door */}
//         <div className="order-first aspect-[3/4] w-[min(62vw,14rem)] rounded-b-lg rounded-t-full border-2 border-[#c9a24b] p-2.5 lg:order-last lg:w-[min(100%,30rem)] lg:justify-self-center">
//           <div
//             className="relative h-full w-full overflow-hidden rounded-b rounded-t-full border border-[#c9a24b]/30"
//             style={doorImage ? undefined : lattice}
//           >
//             {doorImage ? (
//               <>
//                 <img
//                   src={doorImage}
//                   alt="Thamel Heritage Hotel & Spa"
//                   className="block h-full w-full object-cover object-center"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#25160f]/35 to-transparent to-40%" />
//               </>
//             ) : (
//               <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_62%,rgba(255,205,110,0.55),transparent_55%)] motion-reduce:animate-none" />
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }

// export default Comingsoon

import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'

// Put your image in the project's `public` folder (e.g. public/images/hero.jpeg)
// and set its path here. Set to '' to show the lattice pattern instead.
const doorImage = '/images/hero.jpeg'

const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com/thamelheritagehotel/', Icon: FaFacebookF },
  { name: 'Instagram', href: 'https://www.instagram.com/thamelheritagehotel/', Icon: FaInstagram },
]

// Diamond lattice shown inside the arch when there is no image
const lattice = {
  backgroundImage:
    'linear-gradient(45deg, rgba(214,178,94,.3) 1px, transparent 1px), linear-gradient(-45deg, rgba(214,178,94,.3) 1px, transparent 1px)',
  backgroundSize: '1.6rem 1.6rem',
  backgroundPosition: 'center',
}

const Comingsoon = () => {
  const root = useRef(null)

  // One smooth entrance sequence: door, then text, then social icons
  useLayoutEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.from('.g-door', { opacity: 0, y: 40, scale: 0.95, duration: 1.3 })
          .from('.g-img', { scale: 1.15, duration: 2.2, ease: 'power2.out' }, 0)
          .from('.g-item', { opacity: 0, y: 24, duration: 0.9, stagger: 0.14 }, 0.35)
          .from('.g-social', { opacity: 0, y: 14, scale: 0.8, duration: 0.6, stagger: 0.09 }, '-=0.45')
      }, root)

      return () => ctx.revert()
    })

    return () => mm.revert()
  }, [])

  return (
    <main
      ref={root}
      className="flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(120%_90%_at_80%_20%,#5b3b28,#3a2317)] px-5 py-8 font-['Karla',system-ui,sans-serif] text-[#f7efdd]"
    >
      {/* Google fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Marcellus&family=Karla:wght@400;500&display=swap');`}</style>

      <div className="grid w-full max-w-6xl grid-cols-1 items-center justify-items-center gap-10 text-center lg:grid-cols-[1.25fr_1fr] lg:justify-items-stretch lg:gap-16 lg:text-left">
        {/* Text */}
        <div>
          <p className="g-item mb-5 font-['Marcellus',Georgia,serif] text-base text-[#d6b25e] sm:text-xl">
            Thamel Heritage Hotel &amp; Spa
          </p>

          <h1 className="g-item mb-4 font-['Marcellus',Georgia,serif] text-[clamp(2.4rem,8vw,4.5rem)] font-normal leading-[1.08] tracking-[0.01em]">
            Our doors open soon.
          </h1>

          <p className="g-item mx-auto mb-8 max-w-[34rem] text-base leading-relaxed text-[#dccfb5] sm:text-lg lg:mx-0">
            We are putting the finishing touches on our rooms and spa in the heart of Thamel,
            Kathmandu. Follow us to hear when bookings open.
          </p>

          <ul
            aria-label="Social media"
            className="flex flex-wrap justify-center gap-3.5 lg:justify-start"
          >
            {socials.map(({ name, href, Icon }) => (
              <li key={name} className="g-social">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="grid h-[2.9rem] w-[2.9rem] place-items-center rounded-full border border-[#d6b25e] text-lg text-[#d6b25e] transition-colors duration-300 hover:bg-[#d6b25e] hover:text-[#3a2317] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7efdd]"
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>

          <div className="g-item mt-8 space-y-1 text-sm text-[#dccfb5]">
            <p>© {new Date().getFullYear()} Thamel Heritage Hotel &amp; Spa</p>
            <p>
              Crafted by:{' '}
              <a
                href="https://sait.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d6b25e] underline-offset-4 transition-colors duration-300 hover:text-[#f7efdd] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f7efdd]"
              >
                S.A.I.T Solution Nepal
              </a>
            </p>
          </div>
        </div>

        {/* Arched door */}
        <div className="g-door order-first aspect-[3/4] w-[min(82vw,22rem)] rounded-b-lg rounded-t-full border-2 border-[#d6b25e] p-3 lg:order-last lg:w-[min(100%,30rem)] lg:justify-self-center">
          <div
            className="relative h-full w-full overflow-hidden rounded-b rounded-t-full border border-[#d6b25e]/30"
            style={doorImage ? undefined : lattice}
          >
            {doorImage ? (
              <>
                <img
                  src={doorImage}
                  alt="Thamel Heritage Hotel & Spa"
                  className="g-img block h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a2317]/30 to-transparent to-40%" />
              </>
            ) : (
              <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_62%,rgba(255,215,130,0.55),transparent_55%)] motion-reduce:animate-none" />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Comingsoon