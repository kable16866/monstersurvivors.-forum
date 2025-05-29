// Game Data Management System
const gameData = {
    // Game List
    games: [
        {
            id: 'among-us-online',
            title: 'Among Us Online',
            description: 'Play the viral social deduction game online! Find the impostor among your crewmates in this thrilling multiplayer experience.',
            category: 'action',
            tags: ['Multiplayer', 'Social', 'Strategy', 'Space'],
            image: 'https://img.itch.zone/aW1hZ2UvNzc2MDU0LzQzNDMzNTcucG5n/original/S%2BNOcf.png',
            gameUrl: 'https://www.funnygames.org/embed/among-us-online',
            rating: 4.8,
            plays: 2500000,
            featured: true,
            hot: true,
            new: false,
            recommended: true,
            instructions: 'Use mouse to move and interact. Complete tasks or find the impostor!',
            developer: 'InnerSloth',
            releaseDate: '2024-01-15'
        },
        {
            id: 'slither-io',
            title: 'Slither.io',
            description: 'Play as a snake and grow by eating orbs. Avoid other snakes and become the longest snake in this addictive multiplayer game.',
            category: 'action',
            tags: ['Multiplayer', 'Snake', 'IO', 'Competitive'],
            image: 'https://img.itch.zone/aW1hZ2UvMTYyNzgyLzc1NDE4OC5wbmc=/original/2Jq%2BYH.png',
            gameUrl: 'https://slither.io',
            rating: 4.7,
            plays: 8900000,
            featured: true,
            hot: true,
            new: false,
            recommended: true,
            instructions: 'Use mouse to control your snake. Eat orbs to grow, avoid other snakes.',
            developer: 'Steve Howse',
            releaseDate: '2023-12-20'
        },
        {
            id: 'tetris',
            title: 'Tetris Classic',
            description: 'The classic block-stacking puzzle game that started it all. Arrange falling blocks to clear lines and achieve high scores.',
            category: 'puzzle',
            tags: ['Classic', 'Puzzle', 'Arcade', 'Retro'],
            image: 'https://img.itch.zone/aW1hZ2UvMTM1NjY4LzYyODE3Ni5wbmc=/original/L%2BWzxr.png',
            gameUrl: 'https://tetris.com/play-tetris',
            rating: 4.9,
            plays: 15600000,
            featured: true,
            hot: true,
            new: false,
            recommended: true,
            instructions: 'Use arrow keys to move blocks, up arrow to rotate. Complete lines to score.',
            developer: 'Tetris Company',
            releaseDate: '2023-10-05'
        },
        {
            id: 'subway-surfers',
            title: 'Subway Surfers Online',
            description: 'Run, jump, and surf through subway tracks in this endless runner. Collect coins and power-ups while avoiding obstacles.',
            category: 'adventure',
            tags: ['Endless Runner', 'Action', 'Collecting', 'Adventure'],
            image: 'https://img.itch.zone/aW1hZ2UvMTM3MDQ5LzYzMTI4NS5wbmc=/original/gq3o%2BD.png',
            gameUrl: 'https://poki.com/en/g/subway-surfers',
            rating: 4.6,
            plays: 12000000,
            featured: true,
            hot: true,
            new: false,
            recommended: true,
            instructions: 'Swipe left/right to change lanes, up to jump, down to roll.',
            developer: 'SYBO Games',
            releaseDate: '2024-02-28'
        },
        {
            id: 'drift-hunters',
            title: 'Drift Hunters',
            description: 'Experience realistic drifting physics in this amazing racing game. Customize cars and master the art of drifting.',
            category: 'racing',
            tags: ['Drifting', '3D', 'Cars', 'Simulation'],
            image: 'https://img.itch.zone/aW1hZ2UvMTI0Nzg5LzU3OTg4Ni5wbmc=/original/2K%2BfhS.png',
            gameUrl: 'https://drifthuntersmax.io',
            rating: 4.8,
            plays: 7800000,
            featured: true,
            hot: true,
            new: true,
            recommended: true,
            instructions: 'WASD to drive, Space for handbrake, C to change camera view.',
            developer: 'Studionum43',
            releaseDate: '2024-03-10'
        },
        {
            id: 'fall-guys-online',
            title: 'Fall Guys Online',
            description: 'Battle royale party game with colorful characters. Race through obstacle courses and be the last bean standing!',
            category: 'action',
            tags: ['Battle Royale', 'Party', 'Multiplayer', 'Fun'],
            image: 'https://img.itch.zone/aW1hZ2UvODE3NTQzLzQ1OTY4NDEucG5n/original/mD%2BZLn.png',
            gameUrl: 'https://poki.com/en/g/fall-guys-online',
            rating: 4.5,
            plays: 6500000,
            featured: false,
            hot: true,
            new: true,
            recommended: true,
            instructions: 'WASD to move, Space to jump, Shift to dive.',
            developer: 'Mediatonic',
            releaseDate: '2024-01-18'
        },
        {
            id: 'paper-io-2',
            title: 'Paper.io 2',
            description: 'Conquer territory by drawing lines and creating enclosed areas. Avoid other players while expanding your domain.',
            category: 'strategy',
            tags: ['Territory', 'IO', 'Strategy', 'Multiplayer'],
            image: 'https://img.itch.zone/aW1hZ2UvMTU4NzIzLzczNjc4OS5wbmc=/original/o%2B5rVa.png',
            gameUrl: 'https://paper-io.com',
            rating: 4.4,
            plays: 9200000,
            featured: false,
            hot: true,
            new: false,
            recommended: true,
            instructions: 'Use arrow keys or WASD to move and capture territory.',
            developer: 'Voodoo',
            releaseDate: '2023-11-18'
        },
        {
            id: 'minecraft-classic',
            title: 'Minecraft Classic',
            description: 'Build, explore, and create in the classic version of the world\'s most popular sandbox game. Unleash your creativity!',
            category: 'adventure',
            tags: ['Sandbox', 'Building', 'Creative', 'Exploration'],
            image: 'https://img.itch.zone/aW1hZ2UvMTQ2NzE5LzY3ODkxMi5wbmc=/original/vY%2BSrQ.png',
            gameUrl: 'https://classic.minecraft.net',
            rating: 4.9,
            plays: 18000000,
            featured: true,
            hot: false,
            new: false,
            recommended: true,
            instructions: 'WASD to move, Mouse to look around, Left click to destroy, Right click to place blocks.',
            developer: 'Mojang Studios',
            releaseDate: '2023-09-12'
        },
        {
            id: '2048',
            title: '2048',
            description: 'Combine numbered tiles to reach 2048! This addictive puzzle game challenges your strategic thinking and planning skills.',
            category: 'puzzle',
            tags: ['Numbers', 'Strategy', 'Logic', 'Addictive'],
            image: 'https://img.itch.zone/aW1hZ2UvNTg3MDMvMjczNTQ2LnBuZw==/original/0oNYtU.png',
            gameUrl: 'https://play2048.co',
            rating: 4.7,
            plays: 11300000,
            featured: false,
            hot: true,
            new: false,
            recommended: true,
            instructions: 'Use arrow keys to slide tiles. Combine tiles with same numbers to create bigger numbers.',
            developer: 'Gabriele Cirulli',
            releaseDate: '2023-12-05'
        },
        {
            id: 'geometry-dash',
            title: 'Geometry Dash Online',
            description: 'Jump and fly through danger in this rhythm-based action platformer. Time your moves to the beat!',
            category: 'action',
            tags: ['Platformer', 'Rhythm', 'Challenging', 'Music'],
            image: 'https://img.itch.zone/aW1hZ2UvNDU2NzIvMjE1MDYzLnBuZw==/original/XkQoT7.png',
            gameUrl: 'https://poki.com/en/g/geometry-dash-online',
            rating: 4.6,
            plays: 8700000,
            featured: false,
            hot: true,
            new: false,
            recommended: true,
            instructions: 'Click or Space to jump. Time your jumps to avoid obstacles and spikes.',
            developer: 'RobTop Games',
            releaseDate: '2024-01-22'
        },
        {
            id: 'flappy-bird',
            title: 'Flappy Bird',
            description: 'Guide the bird through pipes by tapping to flap. Simple controls, challenging gameplay in this viral classic.',
            category: 'arcade',
            tags: ['Classic', 'Arcade', 'Challenging', 'Simple'],
            image: 'https://img.itch.zone/aW1hZ2UvMTI0NjU3LzU3ODkxMi5wbmc=/original/QwB%2BfY.png',
            gameUrl: 'https://flappybird.io',
            rating: 4.3,
            plays: 25000000,
            featured: false,
            hot: false,
            new: false,
            recommended: true,
            instructions: 'Click or tap to make the bird flap and avoid pipes.',
            developer: 'Dong Nguyen',
            releaseDate: '2023-08-15'
        },
        {
            id: 'agar-io',
            title: 'Agar.io',
            description: 'Start as a small cell and grow by eating smaller players. Avoid being eaten by larger cells in this multiplayer game.',
            category: 'action',
            tags: ['IO', 'Multiplayer', 'Growth', 'Competition'],
            image: 'https://img.itch.zone/aW1hZ2UvMTU5ODQ2LzczOTc4Ni5wbmc=/original/aBcDEf.png',
            gameUrl: 'https://agar.io',
            rating: 4.5,
            plays: 13400000,
            featured: true,
            hot: true,
            new: false,
            recommended: true,
            instructions: 'Use mouse to move, W to eject mass, Space to split.',
            developer: 'Miniclip',
            releaseDate: '2023-10-12'
        },
        {
            id: 'cookie-clicker',
            title: 'Cookie Clicker',
            description: 'Click cookies to earn points and buy upgrades. The ultimate idle clicking game that will keep you hooked for hours.',
            category: 'strategy',
            tags: ['Idle', 'Clicker', 'Incremental', 'Addictive'],
            image: 'https://img.itch.zone/aW1hZ2UvNzE0MzI1LzM5ODc2NTUucG5n/original/ghiJKl.png',
            gameUrl: 'https://orteil.dashnet.org/cookieclicker/',
            rating: 4.8,
            plays: 5600000,
            featured: false,
            hot: false,
            new: true,
            recommended: false,
            instructions: 'Click the big cookie to earn cookies, buy upgrades to automate production.',
            developer: 'Orteil',
            releaseDate: '2024-02-14'
        },
        {
            id: 'temple-run',
            title: 'Temple Run Online',
            description: 'Escape the temple while being chased by demon monkeys. Run, jump, and slide in this endless adventure.',
            category: 'adventure',
            tags: ['Endless Runner', 'Adventure', 'Temple', 'Chase'],
            image: 'https://img.itch.zone/aW1hZ2UvNzU4NzMyLzQyNDM2NzgucG5n/original/mnoPqr.png',
            gameUrl: 'https://poki.com/en/g/temple-run-2',
            rating: 4.4,
            plays: 16800000,
            featured: false,
            hot: false,
            new: false,
            recommended: true,
            instructions: 'Swipe to turn, jump, and slide. Collect coins while avoiding obstacles.',
            developer: 'Imangi Studios',
            releaseDate: '2023-07-30'
        },
        {
            id: 'bubble-shooter',
            title: 'Bubble Shooter Classic',
            description: 'Match three or more bubbles of the same color to pop them. Clear all bubbles to complete each level.',
            category: 'puzzle',
            tags: ['Match 3', 'Bubbles', 'Classic', 'Casual'],
            image: 'https://img.itch.zone/aW1hZ2UvODI0NTkzLzQ2MzI4NzQucG5n/original/stuVwx.png',
            gameUrl: 'https://bubble-shooter.co',
            rating: 4.2,
            plays: 9800000,
            featured: false,
            hot: false,
            new: false,
            recommended: false,
            instructions: 'Aim with mouse, click to shoot bubbles. Match 3+ of same color.',
            developer: 'Bubble Games',
            releaseDate: '2023-06-18'
        },
        {
            id: 'super-mario-bros',
            title: 'Super Mario Bros Online',
            description: 'The classic platformer that defined a generation. Help Mario rescue Princess Peach in the Mushroom Kingdom.',
            category: 'adventure',
            tags: ['Classic', 'Platformer', 'Mario', 'Retro'],
            image: 'https://img.itch.zone/aW1hZ2UvOTM1ODcyLzUyNzgzNDUucG5n/original/yzAbCd.png',
            gameUrl: 'https://supermario-game.com',
            rating: 4.9,
            plays: 22000000,
            featured: true,
            hot: false,
            new: false,
            recommended: true,
            instructions: 'Arrow keys to move, Space to jump. Collect coins and power-ups.',
            developer: 'Nintendo',
            releaseDate: '2023-05-10'
        },
        {
            id: 'chess-online',
            title: 'Chess.com Online',
            description: 'Play chess against players worldwide or challenge the computer. Improve your skills with puzzles and lessons.',
            category: 'strategy',
            tags: ['Chess', 'Board Game', 'Strategy', 'Classic'],
            image: 'https://img.itch.zone/aW1hZ2UvODY3NTQyLzQ4NzIzNjUucG5n/original/efGhIj.png',
            gameUrl: 'https://www.chess.com/play',
            rating: 4.7,
            plays: 14200000,
            featured: true,
            hot: false,
            new: false,
            recommended: true,
            instructions: 'Click pieces to move them. Follow standard chess rules.',
            developer: 'Chess.com',
            releaseDate: '2023-09-25'
        },
        {
            id: 'pac-man',
            title: 'PAC-MAN Online',
            description: 'The legendary arcade game! Navigate mazes, eat dots, and avoid ghosts in this timeless classic.',
            category: 'arcade',
            tags: ['Classic', 'Arcade', 'Maze', 'Retro'],
            image: 'https://img.itch.zone/aW1hZ2UvNzEyMzQ1LzM5Nzg2NDIucG5n/original/klMnOp.png',
            gameUrl: 'https://www.google.com/doodles/30th-anniversary-of-pac-man',
            rating: 4.8,
            plays: 19500000,
            featured: true,
            hot: false,
            new: false,
            recommended: true,
            instructions: 'Arrow keys to move. Eat all dots while avoiding ghosts.',
            developer: 'Namco',
            releaseDate: '2023-04-08'
        },
        {
            id: 'snake-game',
            title: 'Snake Game',
            description: 'The classic snake game reimagined. Grow your snake by eating food while avoiding walls and your own tail.',
            category: 'arcade',
            tags: ['Snake', 'Classic', 'Retro', 'Simple'],
            image: 'https://img.itch.zone/aW1hZ2UvNTc4OTMyLzI3MzQ1NjcucG5n/original/qrStUv.png',
            gameUrl: 'https://playsnake.org',
            rating: 4.1,
            plays: 8900000,
            featured: false,
            hot: false,
            new: false,
            recommended: false,
            instructions: 'Arrow keys to control snake direction. Eat food to grow.',
            developer: 'Classic Games',
            releaseDate: '2023-03-15'
        },
        {
            id: 'wordle',
            title: 'Wordle',
            description: 'Guess the daily word in six tries! This word puzzle game has taken the world by storm.',
            category: 'puzzle',
            tags: ['Word Game', 'Daily', 'Puzzle', 'Viral'],
            image: 'https://img.itch.zone/aW1hZ2UvMTAyNDU3My81ODc2MzIxLnBuZw==/original/wxYzAb.png',
            gameUrl: 'https://www.nytimes.com/games/wordle/',
            rating: 4.6,
            plays: 27000000,
            featured: true,
            hot: true,
            new: false,
            recommended: true,
            instructions: 'Type 5-letter words to guess the answer. Green = correct, Yellow = wrong position.',
            developer: 'New York Times',
            releaseDate: '2024-01-01'
        },
        // 新增的15个热门游戏
        {
            id: 'krunker-io',
            title: 'Krunker.io',
            description: 'Fast-paced pixelated multiplayer first-person shooter. Battle players worldwide in this competitive FPS with unique classes and weapons.',
            category: 'action',
            tags: ['FPS', 'Multiplayer', 'Shooter', 'Pixelated'],
            image: 'https://img.itch.zone/aW1hZ2UvMjE0NTY3LzEwMjM4NzMucG5n/original/Krunker.png',
            gameUrl: 'https://krunker.io',
            rating: 4.6,
            plays: 45000000,
            featured: true,
            hot: true,
            new: false,
            recommended: true,
            instructions: 'WASD to move, Mouse to aim and shoot, R to reload, Space to jump.',
            developer: 'Sidney de Vries',
            releaseDate: '2024-01-20'
        },
        {
            id: 'surviv-io',
            title: 'Surviv.io',
            description: '2D battle royale game where you scavenge for weapons and gear to be the last player standing in intense survival combat.',
            category: 'action',
            tags: ['Battle Royale', '2D', 'Survival', 'Multiplayer'],
            image: 'https://img.itch.zone/aW1hZ2UvMjM0NTY3LzExMjM4NzMucG5n/original/Surviv.png',
            gameUrl: 'https://surviv.io',
            rating: 4.5,
            plays: 28000000,
            featured: true,
            hot: true,
            new: false,
            recommended: true,
            instructions: 'WASD to move, Mouse to aim, Left click to shoot, F to interact.',
            developer: 'Justin Kim',
            releaseDate: '2023-11-15'
        },
        {
            id: 'shell-shockers',
            title: 'Shell Shockers',
            description: 'Multiplayer first-person shooter featuring egg characters armed with guns. Crack your opponents in this hilarious FPS game.',
            category: 'action',
            tags: ['FPS', 'Eggs', 'Funny', 'Multiplayer'],
            image: 'https://img.itch.zone/aW1hZ2UvMzQ1Njc4LzE2MjM4NzMucG5n/original/Shell.png',
            gameUrl: 'https://shellshock.io',
            rating: 4.4,
            plays: 32000000,
            featured: false,
            hot: true,
            new: false,
            recommended: true,
            instructions: 'WASD to move, Mouse to aim and shoot, R to reload.',
            developer: 'Blue Wizard Digital',
            releaseDate: '2023-10-28'
        },
        {
            id: 'zombs-royale',
            title: 'Zombs Royale',
            description: '2D battle royale game with building mechanics. Collect weapons, build structures, and survive against 99 other players.',
            category: 'action',
            tags: ['Battle Royale', 'Building', '2D', 'Survival'],
            image: 'https://img.itch.zone/aW1hZ2UvNDU2Nzg5LzIxMjM4NzMucG5n/original/Zombs.png',
            gameUrl: 'https://zombsroyale.io',
            rating: 4.3,
            plays: 35000000,
            featured: false,
            hot: true,
            new: false,
            recommended: true,
            instructions: 'WASD to move, Mouse to aim, Left click to shoot/build.',
            developer: 'End Game',
            releaseDate: '2023-09-12'
        },
        {
            id: 'hole-io',
            title: 'Hole.io',
            description: 'Control a black hole and consume everything in your path. Grow bigger by eating objects and other players in this addictive IO game.',
            category: 'arcade',
            tags: ['IO', 'Eating', 'Growth', 'Competitive'],
            image: 'https://img.itch.zone/aW1hZ2UvNTY3ODkwLzI2MjM4NzMucG5n/original/Hole.png',
            gameUrl: 'https://hole-io.com',
            rating: 4.5,
            plays: 18000000,
            featured: false,
            hot: true,
            new: false,
            recommended: true,
            instructions: 'Mouse to control the hole. Eat smaller objects to grow.',
            developer: 'Voodoo',
            releaseDate: '2023-08-20'
        },
        {
            id: 'moto-x3m',
            title: 'Moto X3M',
            description: 'Extreme motorcycle racing game with challenging obstacle courses. Perform stunts and reach the finish line as fast as possible.',
            category: 'racing',
            tags: ['Motorcycle', 'Stunts', 'Racing', 'Extreme'],
            image: 'https://img.itch.zone/aW1hZ2UvNjc4OTEyLzMxMjM4NzMucG5n/original/MotoX3M.png',
            gameUrl: 'https://moto-x3m.com',
            rating: 4.7,
            plays: 21000000,
            featured: true,
            hot: false,
            new: true,
            recommended: true,
            instructions: 'Arrow keys to control bike, Up/Down to accelerate/brake.',
            developer: 'MadPuffers',
            releaseDate: '2024-02-05'
        },
        {
            id: 'skribbl-io',
            title: 'Skribbl.io',
            description: 'Multiplayer drawing and guessing game. Draw pictures and guess what others are drawing in this fun social game.',
            category: 'puzzle',
            tags: ['Drawing', 'Guessing', 'Multiplayer', 'Social'],
            image: 'https://img.itch.zone/aW1hZ2UvNzg5MTIzLzM2MjM4NzMucG5n/original/Skribbl.png',
            gameUrl: 'https://skribbl.io',
            rating: 4.6,
            plays: 24000000,
            featured: true,
            hot: false,
            new: false,
            recommended: true,
            instructions: 'Use mouse to draw. Type your guesses in the chat.',
            developer: 'ticedev',
            releaseDate: '2023-07-15'
        },
        {
            id: 'rocket-league-2d',
            title: 'Rocket League 2D',
            description: 'Soccer meets driving in this 2D version of the popular game. Score goals while driving rocket-powered cars.',
            category: 'racing',
            tags: ['Soccer', 'Cars', 'Sports', '2D'],
            image: 'https://img.itch.zone/aW1hZ2UvODkxMjM0LzQxMjM4NzMucG5n/original/Rocket2D.png',
            gameUrl: 'https://poki.com/en/g/rocket-league-2d',
            rating: 4.4,
            plays: 12000000,
            featured: false,
            hot: false,
            new: true,
            recommended: true,
            instructions: 'WASD to drive, Space to jump/boost.',
            developer: 'Psyonix',
            releaseDate: '2024-01-30'
        },
        {
            id: 'fireboy-watergirl',
            title: 'Fireboy and Watergirl',
            description: 'Cooperative puzzle platformer where you control two characters with opposite abilities to solve temple puzzles.',
            category: 'puzzle',
            tags: ['Cooperative', 'Platformer', 'Puzzle', 'Temple'],
            image: 'https://img.itch.zone/aW1hZ2UvOTEyMzQ1LzQ2MjM4NzMucG5n/original/Fireboy.png',
            gameUrl: 'https://poki.com/en/g/fireboy-and-watergirl-forest-temple',
            rating: 4.8,
            plays: 38000000,
            featured: true,
            hot: false,
            new: false,
            recommended: true,
            instructions: 'WASD for Watergirl, Arrow keys for Fireboy. Collect gems and reach exits.',
            developer: 'Oslo Albet',
            releaseDate: '2023-05-20'
        },
        {
            id: 'slope-game',
            title: 'Slope Game',
            description: 'Control a ball rolling down a slope at high speed. Avoid obstacles and see how far you can go in this endless runner.',
            category: 'arcade',
            tags: ['Endless', 'Ball', 'Speed', 'Challenging'],
            image: 'https://img.itch.zone/aW1hZ2UvMTAyMzQ1Ni81MTIzODczLnBuZw==/original/Slope.png',
            gameUrl: 'https://slope-game.github.io',
            rating: 4.3,
            plays: 19000000,
            featured: false,
            hot: true,
            new: false,
            recommended: false,
            instructions: 'A and D keys to steer left and right. Avoid red blocks.',
            developer: 'Rob Kay',
            releaseDate: '2023-06-10'
        },
        {
            id: 'bloons-td-6',
            title: 'Bloons TD 6 Online',
            description: 'Tower defense game where you pop balloons with monkeys and towers. Strategic gameplay with upgrades and special abilities.',
            category: 'strategy',
            tags: ['Tower Defense', 'Balloons', 'Strategy', 'Monkeys'],
            image: 'https://img.itch.zone/aW1hZ2UvMTEyMzQ1Ni81NjEyMzg3My5wbmc=/original/BloonsTD6.png',
            gameUrl: 'https://poki.com/en/g/bloons-tower-defense-6',
            rating: 4.9,
            plays: 16000000,
            featured: true,
            hot: false,
            new: false,
            recommended: true,
            instructions: 'Click to place towers. Upgrade towers to pop more balloons.',
            developer: 'Ninja Kiwi',
            releaseDate: '2023-04-15'
        },
        {
            id: 'happy-wheels',
            title: 'Happy Wheels',
            description: 'Physics-based racing game with over-the-top violence and dark humor. Choose your character and try to reach the finish line.',
            category: 'racing',
            tags: ['Physics', 'Racing', 'Funny', 'Extreme'],
            image: 'https://img.itch.zone/aW1hZ2UvMTIxMjM0NTYvNjEyMzg3My5wbmc=/original/HappyWheels.png',
            gameUrl: 'https://www.totaljerkface.com/happy_wheels.tjf',
            rating: 4.2,
            plays: 42000000,
            featured: false,
            hot: false,
            new: false,
            recommended: false,
            instructions: 'Arrow keys or WASD to control vehicle. Try to survive to the end.',
            developer: 'Jim Bonacci',
            releaseDate: '2023-03-08'
        },
        {
            id: 'getaway-shootout',
            title: 'Getaway Shootout',
            description: 'Chaotic 2-player game where you race to escape using only two keys. Jump, grab weapons, and outrun your opponents.',
            category: 'action',
            tags: ['2-Player', 'Chaotic', 'Racing', 'Weapons'],
            image: 'https://img.itch.zone/aW1hZ2UvMTMxMjM0NTYvNzEyMzg3My5wbmc=/original/Getaway.png',
            gameUrl: 'https://poki.com/en/g/getaway-shootout',
            rating: 4.1,
            plays: 8500000,
            featured: false,
            hot: false,
            new: true,
            recommended: false,
            instructions: 'W and E keys to jump left and right. Grab weapons and power-ups.',
            developer: 'New Eich Games',
            releaseDate: '2024-02-20'
        },
        {
            id: 'run-3',
            title: 'Run 3',
            description: 'Endless running game in space tunnels. Jump and run through challenging 3D courses with gravity-defying gameplay.',
            category: 'adventure',
            tags: ['Endless Runner', 'Space', '3D', 'Challenging'],
            image: 'https://img.itch.zone/aW1hZ2UvMTQxMjM0NTYvODEyMzg3My5wbmc=/original/Run3.png',
            gameUrl: 'https://run3.io',
            rating: 4.5,
            plays: 31000000,
            featured: false,
            hot: true,
            new: false,
            recommended: true,
            instructions: 'Arrow keys or WASD to run and jump. Use walls and ceiling.',
            developer: 'Player 03',
            releaseDate: '2023-09-05'
        },
        {
            id: 'duck-life-4',
            title: 'Duck Life 4',
            description: 'Train your duck in various skills and compete in races. RPG elements combined with mini-games in this beloved series.',
            category: 'adventure',
            tags: ['Duck', 'Training', 'Racing', 'RPG'],
            image: 'https://img.itch.zone/aW1hZ2UvMTUxMjM0NTYvOTEyMzg3My5wbmc=/original/DuckLife4.png',
            gameUrl: 'https://poki.com/en/g/duck-life-4',
            rating: 4.6,
            plays: 14000000,
            featured: false,
            hot: false,
            new: false,
            recommended: true,
            instructions: 'Mouse to navigate menus. Various controls for different training games.',
            developer: 'Wix Games',
            releaseDate: '2023-08-12'
        }
    ],

    // Category Definitions
    categories: {
        all: { name: 'All Games', icon: 'fas fa-gamepad' },
        action: { name: 'Action Games', icon: 'fas fa-fist-raised' },
        puzzle: { name: 'Puzzle Games', icon: 'fas fa-puzzle-piece' },
        adventure: { name: 'Adventure Games', icon: 'fas fa-map' },
        racing: { name: 'Racing Games', icon: 'fas fa-flag-checkered' },
        strategy: { name: 'Strategy Games', icon: 'fas fa-chess' },
        arcade: { name: 'Arcade Games', icon: 'fas fa-ghost' }
    },

    // Get game methods
    getGameById: function(id) {
        return this.games.find(game => game.id === id);
    },

    // Get games by category
    getGamesByCategory: function(category) {
        if (category === 'all') {
            return this.games;
        }
        return this.games.filter(game => game.category === category);
    },

    // Get hot games
    getHotGames: function(limit = 6) {
        return this.games.filter(game => game.hot).slice(0, limit);
    },

    // Get new games
    getNewGames: function(limit = 6) {
        return this.games.filter(game => game.new).slice(0, limit);
    },

    // Get recommended games
    getRecommendedGames: function(limit = 6) {
        return this.games.filter(game => game.recommended).slice(0, limit);
    },

    // Get featured games
    getFeaturedGames: function(limit = 4) {
        return this.games.filter(game => game.featured).slice(0, limit);
    },

    // Search games
    searchGames: function(query) {
        const searchTerm = query.toLowerCase();
        return this.games.filter(game => 
            game.title.toLowerCase().includes(searchTerm) ||
            game.description.toLowerCase().includes(searchTerm) ||
            game.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            game.category.toLowerCase().includes(searchTerm)
        );
    },

    // Get games by tag
    getGamesByTag: function(tag) {
        return this.games.filter(game => 
            game.tags.some(gameTag => gameTag.toLowerCase() === tag.toLowerCase())
        );
    },

    // Get random games
    getRandomGames: function(limit = 4) {
        const shuffled = [...this.games].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, limit);
    },

    // Sort by rating
    getGamesByRating: function(limit = 10) {
        return [...this.games].sort((a, b) => b.rating - a.rating).slice(0, limit);
    },

    // Sort by play count
    getGamesByPlays: function(limit = 10) {
        return [...this.games].sort((a, b) => b.plays - a.plays).slice(0, limit);
    },

    // Get all tags
    getAllTags: function() {
        const tags = new Set();
        this.games.forEach(game => {
            game.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags);
    },

    // Get statistics
    getStats: function() {
        return {
            totalGames: this.games.length,
            totalPlays: this.games.reduce((sum, game) => sum + game.plays, 0),
            averageRating: (this.games.reduce((sum, game) => sum + game.rating, 0) / this.games.length).toFixed(1),
            categoriesCount: Object.keys(this.categories).length - 1, // excluding 'all'
            tagsCount: this.getAllTags().length
        };
    }
};

// Export data (if using module system)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = gameData;
}

// Game utility functions
const gameUtils = {
    // Generate game card HTML
    generateGameCard: function(game) {
        return `
            <div class="game-card fade-in" onclick="playGame('${game.id}')">
                <div class="game-image">
                    <img src="${game.image}" alt="${game.title}" loading="lazy">
                    <div class="game-overlay">
                        <div class="play-icon">
                            <i class="fas fa-play"></i>
                        </div>
                    </div>
                </div>
                <div class="game-info">
                    <h3 class="game-title">${game.title}</h3>
                    <p class="game-description">${game.description}</p>
                    <div class="game-meta">
                        <span class="game-category">${gameData.categories[game.category].name}</span>
                        <div class="game-rating">
                            <i class="fas fa-star"></i>
                            <span>${game.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    // Render games list
    renderGames: function(games, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const gamesHtml = games.map(game => this.generateGameCard(game)).join('');
        container.innerHTML = gamesHtml;

        // Add fade-in animation
        setTimeout(() => {
            const cards = container.querySelectorAll('.game-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('fade-in');
                }, index * 100);
            });
        }, 100);
    },

    // Format play count
    formatPlayCount: function(count) {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(1) + 'M';
        } else if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'K';
        }
        return count.toString();
    }
};

// Initialize game data
document.addEventListener('DOMContentLoaded', function() {
    console.log('Game data loaded with', gameData.games.length, 'games');
}); 