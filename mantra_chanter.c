#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <time.h>

// ANSI color codes for beautiful output
#define RESET "\033[0m"
#define BOLD "\033[1m"
#define YELLOW "\033[33m"
#define CYAN "\033[36m"
#define MAGENTA "\033[35m"
#define GREEN "\033[32m"
#define RED "\033[31m"
#define BLUE "\033[34m"

// Structure to hold mantra information
typedef struct {
    char *sanskrit;
    char *transliteration;
    char *meaning;
    char *deity;
} Mantra;

// Array of sacred mantras
Mantra mantras[] = {
    {
        "ॐ गं गणपतये नमः",
        "Om Gam Ganapataye Namaha",
        "Salutations to Lord Ganesha, the remover of obstacles",
        "Lord Ganesha"
    },
    {
        "ॐ नमः शिवाय",
        "Om Namah Shivaya",
        "I bow to Lord Shiva, the auspicious one",
        "Lord Shiva"
    },
    {
        "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
        "Hare Krishna Hare Krishna Krishna Krishna Hare Hare",
        "Chanting the holy names of Lord Krishna",
        "Lord Krishna"
    },
    {
        "ॐ श्री गुरुभ्यो नमः",
        "Om Shri Gurubhyo Namaha",
        "Salutations to the divine teachers",
        "Guru"
    },
    {
        "गायत्री मंत्र: ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्",
        "Om Bhur Bhuva Swaha Tat Savitur Varenyam Bhargo Devasya Dhimahi Dhiyo Yo Nah Prachodayat",
        "We meditate on the divine light of the Sun God, may it illuminate our minds",
        "Surya (Sun God)"
    },
    {
        "ॐ श्री लक्ष्म्यै नमः",
        "Om Shri Lakshmyai Namaha",
        "Salutations to Goddess Lakshmi, the goddess of wealth and prosperity",
        "Goddess Lakshmi"
    }
};

void print_header() {
    printf(BOLD YELLOW "╔══════════════════════════════════════════════════════════════╗\n");
    printf("║                    🕉️  MANTRA CHANTER  🕉️                     ║\n");
    printf("║              Sacred Hindu Mantras for Peace & Prosperity      ║\n");
    printf("╚══════════════════════════════════════════════════════════════╝\n" RESET);
    printf("\n");
}

void print_om_symbol() {
    printf(BOLD MAGENTA);
    printf("                           ॐ\n");
    printf("                      .-\"\"\"\"-.\n");
    printf("                    .'        '.\n");
    printf("                   /   ॐ   ॐ   \\\n");
    printf("                  |      ॐ      |\n");
    printf("                   \\    ॐ   ॐ  /\n");
    printf("                    '.  ॐ   ॐ.'\n");
    printf("                      '-....-'\n");
    printf(RESET "\n");
}

void display_mantra(int index) {
    if (index < 0 || index >= sizeof(mantras)/sizeof(mantras[0])) {
        printf(RED "Invalid mantra selection!\n" RESET);
        return;
    }
    
    Mantra m = mantras[index];
    
    printf(BOLD CYAN "═══════════════════════════════════════════════════════════════\n" RESET);
    printf(BOLD GREEN "🙏 Deity: " RESET YELLOW "%s\n" RESET, m.deity);
    printf("\n");
    printf(BOLD MAGENTA "Sanskrit: " RESET "%s\n", m.sanskrit);
    printf("\n");
    printf(BOLD BLUE "Transliteration: " RESET "%s\n", m.transliteration);
    printf("\n");
    printf(BOLD GREEN "Meaning: " RESET "%s\n", m.meaning);
    printf(BOLD CYAN "═══════════════════════════════════════════════════════════════\n" RESET);
}

void chant_mantra(int index, int repetitions) {
    if (index < 0 || index >= sizeof(mantras)/sizeof(mantras[0])) {
        printf(RED "Invalid mantra selection!\n" RESET);
        return;
    }
    
    printf(BOLD YELLOW "\n🔔 Beginning chanting session...\n" RESET);
    printf(BOLD GREEN "Chanting: %s\n\n" RESET, mantras[index].transliteration);
    
    for (int i = 1; i <= repetitions; i++) {
        printf(BOLD CYAN "%d. " RESET "%s\n", i, mantras[index].transliteration);
        usleep(1500000); // 1.5 second pause between chants
        
        // Add a peaceful pause every 5 chants
        if (i % 5 == 0 && i < repetitions) {
            printf(MAGENTA "   ... peaceful pause ...\n" RESET);
            sleep(2);
        }
    }
    
    printf(BOLD YELLOW "\n🙏 Chanting session completed. May you find peace and blessings!\n" RESET);
}

void list_mantras() {
    printf(BOLD CYAN "Available Sacred Mantras:\n" RESET);
    printf("═══════════════════════════════════════\n");
    
    int count = sizeof(mantras)/sizeof(mantras[0]);
    for (int i = 0; i < count; i++) {
        printf(BOLD "%d." RESET " %s " YELLOW "(%s)\n" RESET, 
               i + 1, mantras[i].transliteration, mantras[i].deity);
    }
    printf("═══════════════════════════════════════\n\n");
}

void show_help() {
    printf(BOLD GREEN "MANTRA CHANTER - Usage Guide\n" RESET);
    printf("═══════════════════════════════════════\n");
    printf("Commands:\n");
    printf("  ./mantra_chanter list              - Show all available mantras\n");
    printf("  ./mantra_chanter show <number>     - Display a specific mantra\n");
    printf("  ./mantra_chanter chant <number> <repetitions> - Chant a mantra\n");
    printf("  ./mantra_chanter help              - Show this help\n");
    printf("\nExamples:\n");
    printf("  ./mantra_chanter show 1            - Show Ganesha mantra\n");
    printf("  ./mantra_chanter chant 2 5         - Chant Om Namah Shivaya 5 times\n");
    printf("═══════════════════════════════════════\n");
}

int main(int argc, char *argv[]) {
    print_header();
    print_om_symbol();
    
    if (argc < 2) {
        printf(BOLD RED "Welcome to Mantra Chanter!\n" RESET);
        printf("Use './mantra_chanter help' for usage instructions.\n\n");
        list_mantras();
        return 0;
    }
    
    if (strcmp(argv[1], "help") == 0) {
        show_help();
    }
    else if (strcmp(argv[1], "list") == 0) {
        list_mantras();
    }
    else if (strcmp(argv[1], "show") == 0) {
        if (argc < 3) {
            printf(RED "Please specify mantra number (1-%lu)\n" RESET, sizeof(mantras)/sizeof(mantras[0]));
            return 1;
        }
        int mantra_num = atoi(argv[2]) - 1;
        display_mantra(mantra_num);
    }
    else if (strcmp(argv[1], "chant") == 0) {
        if (argc < 4) {
            printf(RED "Usage: ./mantra_chanter chant <mantra_number> <repetitions>\n" RESET);
            return 1;
        }
        int mantra_num = atoi(argv[2]) - 1;
        int repetitions = atoi(argv[3]);
        
        if (repetitions <= 0 || repetitions > 108) {
            printf(RED "Repetitions should be between 1 and 108 (traditional mala count)\n" RESET);
            return 1;
        }
        
        display_mantra(mantra_num);
        printf("\n");
        chant_mantra(mantra_num, repetitions);
    }
    else {
        printf(RED "Unknown command: %s\n" RESET, argv[1]);
        printf("Use './mantra_chanter help' for usage instructions.\n");
        return 1;
    }
    
    printf(BOLD MAGENTA "\n🕉️ Om Shanti Shanti Shanti 🕉️\n" RESET);
    return 0;
}

