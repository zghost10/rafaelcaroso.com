import {css} from '@emotion/react'
import { useRef, useEffect } from 'react'

export const Matrix = () => {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (ref.current) {
      const canvas = document.querySelector('canvas')!
      const ctx = ref.current.getContext('2d')!

      // Setting the width and height of the canvas
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Setting up the letters
      var letters: string | string[] = 'アイウエオカキクケコガギグゲゴサシスセソザジズゼゾタチツテトダヂヅデドナニヌネノハヒフヘホバビブベボパピプペポマミムメモヤユヨラリルレロワヲン';
      letters = letters.split('');

      // Setting up the columns
      var fontSize = 10,
          columns = canvas.width / fontSize;

      // Setting up the drops
      var drops: any[] = [];
      for (var i = 0; i < columns; i++) {
        drops[i] = 1;
      }

      // Setting up the draw function
      function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, .1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < drops.length; i++) {
          var text = letters[Math.floor(Math.random() * letters.length)];
          ctx.fillStyle = '#0f0';
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          drops[i]++;
          if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
            drops[i] = 0;
          }
        }
      }

      // Loop the animation
      setInterval(draw, 33);
    }
  }, [])
  
  return (
    <canvas ref={ref} css={css`
      opacity: 0.7;
      display: block;
      position: absolute; 
      z-index: -1;
    `}/>
  )
}