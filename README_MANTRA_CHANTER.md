# 🕉️ Mantra Chanter - Sacred Hindu Mantras CLI

A beautiful command-line program written in C that brings the peace and spirituality of Hindu mantras to your terminal. This unique program displays sacred mantras in Sanskrit with transliterations, meanings, and allows you to perform guided chanting sessions.

## ✨ Features

- **6 Sacred Mantras** including Ganesha, Shiva, Krishna, Guru, Gayatri, and Lakshmi mantras
- **Beautiful Terminal Output** with colors and Sanskrit text
- **Guided Chanting Sessions** with customizable repetitions (1-108, following traditional mala count)
- **Detailed Information** for each mantra including deity, meaning, and transliteration
- **Peaceful Timing** with automatic pauses during chanting sessions

## 🛠️ Compilation & Installation

### Quick Start
```bash
# Compile the program
make

# Run with help
./mantra_chanter help

# List all available mantras
./mantra_chanter list
```

### System-wide Installation
```bash
# Install for all users
make install

# Now you can run from anywhere
mantra_chanter help
```

## 📖 Usage

### Basic Commands

```bash
# Show all available mantras
./mantra_chanter list

# Display a specific mantra (numbers 1-6)
./mantra_chanter show 1

# Chant a mantra with repetitions
./mantra_chanter chant 2 5

# Show help
./mantra_chanter help
```

### Available Mantras

1. **Ganesha Mantra** - `Om Gam Ganapataye Namaha` (Obstacle remover)
2. **Shiva Mantra** - `Om Namah Shivaya` (The auspicious one)
3. **Krishna Mantra** - `Hare Krishna Hare Krishna...` (Divine names)
4. **Guru Mantra** - `Om Shri Gurubhyo Namaha` (Divine teachers)
5. **Gayatri Mantra** - The most sacred Vedic mantra (Sun God)
6. **Lakshmi Mantra** - `Om Shri Lakshmyai Namaha` (Wealth & prosperity)

### Example Sessions

```bash
# Quick demo
make demo

# Show the powerful Gayatri mantra
./mantra_chanter show 5

# Traditional 108 repetitions (full mala)
./mantra_chanter chant 1 108

# Morning prayers with Ganesha mantra
./mantra_chanter chant 1 21
```

## 🎨 Features Showcase

- **Colorful Output**: Beautiful ANSI colors for different elements
- **Sanskrit Display**: Authentic Devanagari script rendering
- **Om Symbol Art**: ASCII art representation of the sacred Om
- **Timed Chanting**: Realistic pacing with peaceful pauses
- **Traditional Limits**: Respects the 108-bead mala tradition

## 🙏 Spiritual Significance

Each mantra in this program has been carefully selected for its spiritual importance:

- **Ganesha**: Begin any endeavor by removing obstacles
- **Shiva**: Connect with the destroyer of ignorance
- **Krishna**: Chant the divine names for devotion
- **Guru**: Honor the teachers who guide us
- **Gayatri**: The mother of all mantras, for wisdom
- **Lakshmi**: Invoke prosperity and abundance

## 🔧 Technical Details

- **Language**: Pure C (C99 standard)
- **Dependencies**: None (uses standard library only)
- **Platform**: Linux/Unix systems with ANSI color support
- **Memory**: Lightweight, minimal resource usage
- **Unicode**: Supports Sanskrit Devanagari characters

## 🧹 Cleanup

```bash
# Remove compiled files
make clean

# Uninstall from system
make uninstall
```

## 🌟 Why This Program?

In our fast-paced digital world, this program brings ancient wisdom to modern terminals. It's perfect for:

- **Daily Meditation**: Start your coding sessions with peace
- **Stress Relief**: Take mindful breaks during development
- **Cultural Learning**: Explore Hindu spiritual traditions
- **Unique CLI Tool**: A conversation starter in your terminal

---

*"Om Shanti Shanti Shanti" - May there be peace in mind, body, and spirit* 🕉️

