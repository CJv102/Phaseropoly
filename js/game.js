import BootScene from './Scenes/BootScene.js'
import PreloadScene from './Scenes/PreloadScene.js'
import TitleScene from './Scenes/TitleScene.js'
import OptionsScene from './Scenes/OptionsScene.js'
import InstructionScene from './Scenes/InstructionScene.js'
import CreditScene from './Scenes/CreditScene.js'
import GameScene from './Scenes/GameScene.js'
import Model from './model.js'

var bootScene = new BootScene()
var preloadScene = new PreloadScene()
var titleScene = new TitleScene()
var optionScene = new OptionsScene()
var instructionScene = new InstructionScene()
var creditScene = new CreditScene()
var gameScene = new GameScene()

class Game extends Phaser.Game
{
  constructor ()
  {
    super(gameConfig)
    const model = new Model()
    this.globals = { model, bgMusic: null }
    this.scene.add('BootScene', bootScene)
    this.scene.add('PreloadScene', preloadScene)
    this.scene.add('OptionsScene', optionScene)
    this.scene.add('InstructionScene', instructionScene)
    this.scene.add("CreditScene", creditScene)
    this.scene.add('TitleScene', titleScene)
    this.scene.add('GameScene', gameScene)
    this.scene.start('BootScene')
  }
}

window.onload = () => game = new Game(gameConfig)
window.focus()