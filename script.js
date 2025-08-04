// Hindu Mantra Chanter - JavaScript Logic
class MantraChanter {
    constructor() {
        this.mantras = [
            {
                sanskrit: "ॐ गं गणपतये नमः",
                transliteration: "Om Gam Ganapataye Namaha",
                meaning: "Salutations to Lord Ganesha, the remover of obstacles",
                deity: "Lord Ganesha"
            },
            {
                sanskrit: "ॐ नमः शिवाय",
                transliteration: "Om Namah Shivaya",
                meaning: "I bow to Lord Shiva, the auspicious one",
                deity: "Lord Shiva"
            },
            {
                sanskrit: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
                transliteration: "Hare Krishna Hare Krishna Krishna Krishna Hare Hare",
                meaning: "Chanting the holy names of Lord Krishna",
                deity: "Lord Krishna"
            },
            {
                sanskrit: "ॐ श्री गुरुभ्यो नमः",
                transliteration: "Om Shri Gurubhyo Namaha",
                meaning: "Salutations to the divine teachers",
                deity: "Guru"
            },
            {
                sanskrit: "गायत्री मंत्र: ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्",
                transliteration: "Om Bhur Bhuva Swaha Tat Savitur Varenyam Bhargo Devasya Dhimahi Dhiyo Yo Nah Prachodayat",
                meaning: "We meditate on the divine light of the Sun God, may it illuminate our minds",
                deity: "Surya (Sun God)"
            },
            {
                sanskrit: "ॐ श्री लक्ष्म्यै नमः",
                transliteration: "Om Shri Lakshmyai Namaha",
                meaning: "Salutations to Goddess Lakshmi, the goddess of wealth and prosperity",
                deity: "Goddess Lakshmi"
            }
        ];

        this.currentChantSession = null;
        this.isChanting = false;
        
        this.init();
    }

    init() {
        this.setupTabs();
        this.renderMantras();
        this.populateMantraSelect();
        this.setupChantingControls();
    }

    setupTabs() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                // Remove active class from all tabs and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                button.classList.add('active');
                document.getElementById(targetTab).classList.add('active');
            });
        });
    }

    renderMantras() {
        const mantrasGrid = document.querySelector('.mantras-grid');
        
        this.mantras.forEach((mantra, index) => {
            const mantraCard = document.createElement('div');
            mantraCard.className = 'mantra-card';
            mantraCard.innerHTML = `
                <div class="mantra-header">
                    <div class="mantra-number">${index + 1}</div>
                    <div class="deity-name">🙏 ${mantra.deity}</div>
                </div>
                <div class="sanskrit-text">${mantra.sanskrit}</div>
                <div class="transliteration-text">${mantra.transliteration}</div>
                <div class="meaning-text">${mantra.meaning}</div>
            `;
            
            // Add click handler to select this mantra for chanting
            mantraCard.addEventListener('click', () => {
                this.selectMantraForChanting(index);
            });
            
            mantrasGrid.appendChild(mantraCard);
        });
    }

    populateMantraSelect() {
        const select = document.getElementById('mantra-select');
        
        this.mantras.forEach((mantra, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `${index + 1}. ${mantra.deity} - ${mantra.transliteration}`;
            select.appendChild(option);
        });
    }

    selectMantraForChanting(index) {
        // Switch to chanting tab
        document.querySelector('[data-tab="chant"]').click();
        
        // Select the mantra in the dropdown
        document.getElementById('mantra-select').value = index;
        
        // Show a brief highlight effect
        setTimeout(() => {
            document.getElementById('mantra-select').style.borderColor = '#ff6b35';
            setTimeout(() => {
                document.getElementById('mantra-select').style.borderColor = '';
            }, 1000);
        }, 300);
    }

    setupChantingControls() {
        const startBtn = document.getElementById('start-chant');
        const stopBtn = document.getElementById('stop-chant');
        const repetitionsInput = document.getElementById('repetitions');

        startBtn.addEventListener('click', () => {
            const mantraIndex = parseInt(document.getElementById('mantra-select').value);
            const repetitions = parseInt(repetitionsInput.value);
            
            if (repetitions < 1 || repetitions > 108) {
                alert('Please enter repetitions between 1 and 108 (traditional mala count)');
                return;
            }
            
            this.startChanting(mantraIndex, repetitions);
        });

        stopBtn.addEventListener('click', () => {
            this.stopChanting();
        });

        // Validate repetitions input
        repetitionsInput.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            if (value > 108) {
                e.target.value = 108;
            } else if (value < 1) {
                e.target.value = 1;
            }
        });
    }

    startChanting(mantraIndex, repetitions) {
        if (this.isChanting) return;
        
        this.isChanting = true;
        const mantra = this.mantras[mantraIndex];
        
        // Update UI
        document.getElementById('start-chant').disabled = true;
        document.getElementById('stop-chant').disabled = false;
        document.getElementById('chant-display').classList.remove('hidden');
        
        // Set up chant display
        document.getElementById('chant-deity').textContent = `🙏 ${mantra.deity}`;
        document.getElementById('chant-sanskrit').textContent = mantra.sanskrit;
        document.getElementById('chant-transliteration').textContent = mantra.transliteration;
        document.getElementById('current-count').textContent = '0';
        document.getElementById('total-count').textContent = repetitions;
        document.getElementById('progress-fill').style.width = '0%';
        
        // Start chanting session
        this.runChantingSession(mantra, repetitions);
    }

    async runChantingSession(mantra, repetitions) {
        const chantText = document.getElementById('chant-text');
        const chantStatus = document.getElementById('chant-status');
        const currentCount = document.getElementById('current-count');
        const progressFill = document.getElementById('progress-fill');
        
        chantStatus.textContent = '🔔 Beginning chanting session...';
        chantStatus.className = 'chant-status';
        
        await this.sleep(1000);
        
        if (!this.isChanting) return;
        
        chantStatus.textContent = `Chanting: ${mantra.transliteration}`;
        
        for (let i = 1; i <= repetitions; i++) {
            if (!this.isChanting) break;
            
            // Update display
            chantText.textContent = `${i}. ${mantra.transliteration}`;
            currentCount.textContent = i;
            progressFill.style.width = `${(i / repetitions) * 100}%`;
            
            // Chant timing (1.5 seconds)
            await this.sleep(1500);
            
            if (!this.isChanting) break;
            
            // Peaceful pause every 5 chants
            if (i % 5 === 0 && i < repetitions) {
                chantText.textContent = '';
                chantStatus.textContent = '... peaceful pause ...';
                chantStatus.className = 'chant-status peaceful-pause';
                
                await this.sleep(2000);
                
                if (!this.isChanting) break;
                
                chantStatus.textContent = `Chanting: ${mantra.transliteration}`;
                chantStatus.className = 'chant-status';
            }
        }
        
        if (this.isChanting) {
            // Session completed
            chantText.textContent = '';
            chantStatus.textContent = '🙏 Chanting session completed. May you find peace and blessings!';
            chantStatus.className = 'chant-status completed';
            
            // Show completion message
            setTimeout(() => {
                chantStatus.textContent = '🕉️ Om Shanti Shanti Shanti 🕉️';
            }, 3000);
        }
        
        this.stopChanting();
    }

    stopChanting() {
        this.isChanting = false;
        
        // Reset UI
        document.getElementById('start-chant').disabled = false;
        document.getElementById('stop-chant').disabled = true;
        
        if (this.currentChantSession) {
            clearTimeout(this.currentChantSession);
            this.currentChantSession = null;
        }
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MantraChanter();
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Add click sound effect (optional - can be enhanced with actual audio)
    document.querySelectorAll('.btn, .tab-btn, .mantra-card').forEach(element => {
        element.addEventListener('click', () => {
            element.style.transform = 'scale(0.95)';
            setTimeout(() => {
                element.style.transform = '';
            }, 150);
        });
    });

    // Add floating animation to Om symbol
    const omSymbol = document.querySelector('.om-art');
    if (omSymbol) {
        setInterval(() => {
            omSymbol.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                omSymbol.style.transform = 'translateY(0px)';
            }, 1000);
        }, 3000);
    }

    // Add subtle background animation
    let hue = 0;
    setInterval(() => {
        hue = (hue + 0.5) % 360;
        document.body.style.background = `linear-gradient(135deg, 
            hsl(${hue}, 20%, 96%), 
            hsl(${(hue + 30) % 360}, 25%, 94%))`;
    }, 100);
});

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

