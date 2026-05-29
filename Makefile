install:
	@echo "Установка зависимостей..."
	npm ci
brain-games:
	@echo "Запуск игры Brain Games..."
	node bin/brain-games.js

publish:
	@echo "Публикация пакета на npm..."
	npm publish --dry-run