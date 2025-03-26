
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
                // Luxury specific colors - enhanced gold palette
                gold: {
                    DEFAULT: '#d4af37',
                    light: '#f8df76',
                    dark: '#b3941f',
                    muted: 'rgba(212, 175, 55, 0.6)'
                },
                black: {
                    DEFAULT: '#121212',
                    light: '#222222',
                    dark: '#080808'
                }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: {
						opacity: '0'
					},
					to: {
						opacity: '1'
					}
				},
				'fade-up': {
					from: {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-right': {
					from: {
						transform: 'translateX(100%)'
					},
					to: {
						transform: 'translateX(0)'
					}
				},
				'slide-in-left': {
					from: {
						transform: 'translateX(-100%)'
					},
					to: {
						transform: 'translateX(0)'
					}
				},
				'blur-in': {
					from: {
						opacity: '0',
						filter: 'blur(8px)'
					},
					to: {
						opacity: '1',
						filter: 'blur(0)'
					}
				},
				'pulse-soft': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.8'
					}
				},
                'shimmer': {
                    '0%': {
                        backgroundPosition: '-100% 0'
                    },
                    '100%': {
                        backgroundPosition: '200% 0'
                    }
                },
                'gold-pulse': {
                    '0%, 100%': {
                        boxShadow: '0 0 15px rgba(212, 175, 55, 0.5)'
                    },
                    '50%': {
                        boxShadow: '0 0 25px rgba(212, 175, 55, 0.8)'
                    }
                }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-up': 'fade-up 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'blur-in': 'blur-in 0.6s ease-out',
				'pulse-soft': 'pulse-soft 3s infinite ease-in-out',
                'shimmer': 'shimmer 2s infinite linear',
                'gold-pulse': 'gold-pulse 3s infinite ease-in-out'
			},
			boxShadow: {
				'glass': '0 8px 32px 0 rgba(212, 175, 55, 0.07)',
				'glass-sm': '0 4px 16px 0 rgba(212, 175, 55, 0.05)',
				'glass-lg': '0 12px 48px 0 rgba(212, 175, 55, 0.10)',
				'neu': '10px 10px 20px #0a0a0a, -10px -10px 20px #1e1e1e',
				'neu-sm': '5px 5px 10px #0a0a0a, -5px -5px 10px #1e1e1e',
                'luxury': '0 10px 30px rgba(0, 0, 0, 0.3), 0 1px 8px rgba(212, 175, 55, 0.2)',
                'gold': '0 0 15px rgba(212, 175, 55, 0.5)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-dots': 'radial-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px)',
				'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                'luxury-gradient': 'linear-gradient(135deg, #121212 0%, #2d2d2d 100%)',
                'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #f8df76 100%)'
			},
			backdropBlur: {
				'xs': '2px',
			},
            letterSpacing: {
                'widest': '0.2em'
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
