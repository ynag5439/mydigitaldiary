# Makefile for Mantra Chanter - A Hindu Mantra CLI Program

CC = gcc
CFLAGS = -Wall -Wextra -std=c99
TARGET = mantra_chanter
SOURCE = mantra_chanter.c

# Default target
all: $(TARGET)

# Compile the program
$(TARGET): $(SOURCE)
	$(CC) $(CFLAGS) -o $(TARGET) $(SOURCE)
	@echo "✅ Mantra Chanter compiled successfully!"
	@echo "🕉️  Run './$(TARGET) help' to get started"

# Clean compiled files
clean:
	rm -f $(TARGET)
	@echo "🧹 Cleaned up compiled files"

# Install (copy to /usr/local/bin for system-wide access)
install: $(TARGET)
	sudo cp $(TARGET) /usr/local/bin/
	@echo "🌟 Mantra Chanter installed system-wide!"
	@echo "   You can now run 'mantra_chanter' from anywhere"

# Uninstall
uninstall:
	sudo rm -f /usr/local/bin/$(TARGET)
	@echo "🗑️  Mantra Chanter uninstalled"

# Run with default behavior (show help and list mantras)
run: $(TARGET)
	./$(TARGET)

# Quick test - show Ganesha mantra
test: $(TARGET)
	@echo "🧪 Testing with Ganesha mantra:"
	./$(TARGET) show 1

# Demo chanting session
demo: $(TARGET)
	@echo "🎭 Demo: Chanting Om Namah Shivaya 3 times"
	./$(TARGET) chant 2 3

.PHONY: all clean install uninstall run test demo

