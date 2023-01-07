import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import React, { useCallback } from 'react'

const config = {
  background: {
    color: {
      value: 'transparent',
    },
    position: '50% 50%',
    repeat: 'no-repeat',
    size: 'cover',
  },
  fullScreen: {
    zIndex: -1,
  },
  interactivity: {
    events: {
      onClick: {
        mode: 'push',
      },
      onDiv: {
        selectors: '#repulse-div',
        enable: true,
        mode: 'repulse',
      },
      onHover: {
        mode: 'repulse',
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      grab: {
        distance: 400,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: {
        value: '#ffffff',
      },
      distance: 150,
      enable: true,
      opacity: 0.4,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      outModes: {
        bottom: 'out',
        left: 'out',
        right: 'out',
        top: 'out',
      },
    },
    number: {
      density: {
        enable: true,
      },
      value: 30,
    },
    opacity: {
      random: {
        enable: true,
      },
      value: {
        min: 0.1,
        max: 0.5,
      },
      animation: {
        enable: true,
        speed: 5,
        minimumValue: 0.1,
      },
    },
    size: {
      random: {
        enable: true,
      },
      value: {
        min: 0.1,
        max: 8,
      },
      animation: {
        enable: true,
        speed: 20,
        minimumValue: 0.1,
      },
    },
  },
}

const ParticlesView = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  return (
    <Particles
      id="particles-js"
      options={config}
      init={particlesInit}
      loaded={particlesLoaded}
      className="fixed"
    />
  )
}

export default ParticlesView
