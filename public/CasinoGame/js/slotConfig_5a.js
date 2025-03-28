// 2-3-4-3-2 144 lines - respins feature

/*
                ----- Scatter Symbol -----
 The game proceeds with the accumulation of scatters. 
 Every four scatters raise the stage of the game, increase the reward in the chest (10, 20, 30, 40 coins) and give the opportunity to open chests. 
 One chest is full of coins, the other is almost empty. AAfter reaching each stage, a lamp appears above the slot reel.
 When all four lamps have appeared, the player receives 4 respins. Each scatter symbol during re-spins gives an additional re-spin. 
 After the end of the re-spins, the game stage is reset to default.
*/

var slotConfig_5a = {
    slotTextColor : 0x4f312d,       // text color

    symbolSizeY: 225, 
    spinTime: 2000,                 // time, milliseconds
    winShowTime: 3000,              // time, milliseconds
    showWinCoinsMessage : false,    // displaying a message with the amount of money won
    winMessageTime: 2000,           // win message show time
    minWin : 200,                      // to show big, mega, huge popup
    useBigWinCongratulation : true,    // to show big, mega, huge popup
    showWinFreeSpinsMessage : false,    // don't show regular message
    showFreeGameMessage : false,

    symbAnimFrameRate: 24,      // symbols animation frame rate
    frameWidth : 225,           // frame width
    frameHeight : 225,          // frame height

    playSpinSound: false,

    lineColor : 0xFFEA31,       // line color
    showWinLines : false,

    lineBetMaxValue: 20,        // slot line bet maxvalue
    useWild: true,              // use wild flag, wild can be substitute for any symbol to create winning combinations (exclude first reel)
    wild: 'Wild',               // wild symbol name
    useScatter: false,          // use scatter flag - we will use the scatter icon to launch the re-spin mode
    scatter: 'Scatter',         // scatter symbol name
    selectedLines: 'all',       //'all' / 'first' - selectad lines at start

    useWildInFirstPosition: false,              // substitute of the first symbol not allowed
    useLineBetMultiplier: true,                 // win multiplied by bet
    useLineBetFreeSpinMultiplier: false,        // free spins win multiplied by bet
    defaultCoins: 100000,                       // default player credit 100 000

    localOffsetX: 0,                            // x offset from center for all scene objects
    localOffsetY: 70,                           // y offset from center for all scene objects

    maxHold: 2,                                 // the maximum number of slot reels that can be held - not used
    
    fonts: [
        /*
        {
            fontName: 'gameFont_0',
            filePNG:  'fonts/aladin_36_0.png',
            fileXML:  'fonts/aladin_36_0.xml'
        },
        */
        {
            fontName: 'gameFont_1',
            filePNG:  'fonts/aladin_36_1.png',
            fileXML:  'fonts/aladin_36_1.xml'
        },
        {
            fontName: 'gameFont_2',
            filePNG:  'fonts/aladin_36_2.png',
            fileXML:  'fonts/aladin_36_2.xml'
        },
        /*
        {
            fontName: 'gameFont_3',
            filePNG:  'fonts/*.png',
            fileXML:  'fonts/*.xml'
        },
        */
    ],

    sprites: [
        // debug reference
        {
            fileName: null,
            name: 'debugreference'
        },

        // common sprites 
        {
            fileName: 'SlotMachine_5a.png',
            name: 'slot'
        },
        {
            fileName: 'ReelHolderTop.png',
            name: 'reelholdertop'
        },
        {
            fileName: 'ReelHolderBot.png',
            name: 'reelholderbot'
        },
        {
            fileName: null,
            name: 'paneljackpot'
        },
        {
            fileName: null,
            name: 'handle'
        },
        {
            fileName: null,
            name: 'handle_ball'
        },
        {
            fileName: 'ButtonPlus.png',
            name: 'button_plus'
        },
        {
            fileName: 'ButtonPlusHover.png',
            name: 'button_plus_hover'
        },
        {
            fileName: 'ButtonMinus.png',
            name: 'button_minus'
        },
        {
            fileName: 'ButtonMinusHover.png',
            name: 'button_minus_hover'
        },
        {
            fileName: null,
            name: 'lamp_off'
        },
        {
            fileName: 'PanelTotalBet.png',
            name: 'panel_totalbet'
        },
        {
            fileName: 'PanelWin.png',
            name: 'panel_win'
        },
        {
            fileName: 'PanelLines.png',
            name: 'panel_lines'
        },
        {
            fileName: 'PanelBalance.png',
            name: 'panel_balance'
        },
        {
            fileName: null,
            name: 'panel_menu'
        },
        {
            fileName: null,
            name: 'button_lines'
        },
        {
            fileName: null,
            name: 'button_lines_hover'
        },
        {
            fileName: 'ButtonMaxBet.png',
            name: 'button_maxbet'
        },
        {
            fileName: 'ButtonMaxBetHover.png',
            name: 'button_maxbet_hover'
        },
        {
            fileName: 'ButtonSpin.png',
            name: 'button_spin'
        },
        {
            fileName: 'ButtonSpinHover.png',
            name: 'button_spin_hover'
        },
        {
            fileName: 'ButtonAutoSpin.png',
            name: 'button_autospin'
        },
        {
            fileName: 'ButtonAutoSpinHover.png',
            name: 'button_autospin_hover'
        },
        {
            fileName: null,
            name: 'line_button'
        },
        {
            fileName: null,
            name: 'line_button_hover'
        },
        {
            fileName: null,
            name: 'button_hold'
        },
        {
            fileName: null,
            name: 'button_hold_on'
        },
        {
            fileName: 'RespinLamp.png',
            name: 'respin_lamp'
        },
        {
            fileName: 'ProgressbarBase.png',
            name: 'progress_base'
        },
        {
            fileName: 'ProgressbarFill.png',
            name: 'progress_fill'
        },
        {
            fileName: 'ProgressbarSpot.png',
            name: 'progress_spot'
        },
        {
            fileName: 'ChestOpened.png',
            name: 'chest_opened'
        },
        {
            fileName: 'ChestClosed.png',
            name: 'chest_closed'
        },
        {
            fileName: 'ChestText.png',
            name: 'chest_text'
        },
        // common gui sprites 
        {
            fileName: 'ButtonMenu.png',
            name: 'button_menu'
        },
        {
            fileName: 'ButtonMenuHover.png',
            name: 'button_menu_hover'
        },
        {
            fileName: 'ButtonInfo.png',
            name: 'button_info'
        },
        {
            fileName: 'ButtonInfoHover.png',
            name: 'button_info_hover'
        },
        {
            fileName: 'ButtonSettings.png',
            name: 'button_settings'
        },
        {
            fileName: 'ButtonSettingsHover.png',
            name: 'button_settings_hover'
        },
        {
            fileName: 'ButtonRules.png',
            name: 'button_rules'
        },
        {
            fileName: 'ButtonRulesHover.png',
            name: 'button_rules_hover'
        },
        {
            fileName: 'gui/ButtonOn.png',
            name: 'button_on'
        },
        {
            fileName: 'gui/ButtonOff.png',
            name: 'button_off'
        },
        {
            fileName: 'gui/MessagePanel.png',
            name: 'message_panel'
        },   
        {
            fileName: 'gui/SmallMessagePanel.png',
            name: 'small_message_panel'
        }, 
        {
            fileName: 'gui/AboutPanel.png',
            name: 'about_panel'
        }, 
        {
            fileName: null,
            name: 'about_title'
        }, 
        {
            fileName: 'gui/SettingsPanel.png',
            name: 'settings_panel'
        }, 
        {
            fileName: 'gui/FreeSpinPanel.png',
            name: 'freespin_panel'
        }, 
        {
            fileName: null,
            name: 'freespin_title'
        },
        {
            fileName: 'gui/BigWinPanel.png',
            name: 'bigwin_panel'
        }, 
        {
            fileName: null,
            name: 'bigwin_title'
        }, 
        {
            fileName: 'gui/HugeWinPanel.png',
            name: 'hugewin_panel'
        }, 
        {
            fileName: null,
            name: 'hugewin_title'
        },
        {
            fileName: 'gui/MegaWinPanel.png',
            name: 'megawin_panel'
        }, 
        {
            fileName: null,
            name: 'megawin_title'
        },
        {
            fileName: 'gui/ChestWinPanel.png',
            name: 'chestwin_panel'
        }, 
        {
            fileName: null,
            name: 'settings_title'
        },
        {
            fileName: 'gui/PayLinesTable.png',
            name: 'paylines_table'
        },
        {
            fileName: null,
            name: 'minor_title'
        },
        {
            fileName: null,
            name: 'major_title'
        },
        {
            fileName: null,
            name: 'rules_title'
        },
        {
            fileName: null,
            name: 'special_title'
        },
        {
            fileName: 'gui/Logo.png',
            name: 'logo'
        }, 
        {
            fileName: 'gui/ExitButton.png',
            name: 'exit_button'
        }, 
        {
            fileName: 'gui/ExitButtonHover.png',
            name: 'exit_button_hover'
        },   
        {
            fileName: null, 
            name: 'middle_button'
        }, 
        {
            fileName: null, 
            name: 'middle_button_hover'
        },   
        {
            fileName: 'gui/LongButton.png', 
            name: 'long_button'
        }, 
        {
            fileName: 'gui/LongButtonHover.png', 
            name: 'long_button_hover'
        }, 
        {
            fileName: 'gui/ExtraLongButton.png', 
            name: 'extralong_button'
        }, 
        {
            fileName: 'gui/ExtraLongButtonHover.png', 
            name: 'extralong_button_hover'
        },
        {
            fileName: 'gui/SmallButton.png', 
            name: 'small_button'
        }, 
        {
            fileName: 'gui/SmallButtonHover.png', 
            name: 'small_button_hover'
        }, 
        {
            fileName: 'gui/InfoPanel.png', 
            name: 'info_panel'
        },  
        {
            fileName: 'gui/HelpTitle.png', 
            name: 'help_title'
        },  
        {
            fileName: 'gui/JackpotWinPanel.png', 
            name: 'jackpotwin_panel'
        },   
        {
            fileName: null, 
            name: 'jackpotwin_title'
        }, 
        {
            fileName: 'gui/popUpBkg.png', 
            name: 'pu_background'
        },   
        {
            fileName: 'gui/grayBkg_01.png', 
            name: 'gray_01'
        }, 
        {
            fileName: 'gui/NextButtonHover.png', 
            name: 'next_button_hover'
        },
        {
            fileName: 'gui/NextButton.png', 
            name: 'next_button'
        },  
        {
            fileName: 'gui/PrevButtonHover.png', 
            name: 'prev_button_hover'
        },   
        {
            fileName: 'gui/PrevButton.png', 
            name: 'prev_button'
        },        
        {
            fileName: null, 
            name: 'soundon'
        },  
        {
            fileName: null, 
            name: 'soundoff'
        }, 
        {
            fileName: null, 
            name: 'musicon'
        }, 
        {
            fileName: null, 
            name: 'musicoff'
        },  
        {
            fileName: null, 
            name: 'symbol_plate'
        },   
        {
            fileName: null, 
            name: 'specsymbol_plate'
        },   
        {
            fileName: null, 
            name: 'navi_dot'
        },    
        {
            fileName: null, 
            name: 'navi_dot_active'
        },    
    ],

    symbols:
    [
        {
            fileName: 'Shoes.png',                      // filename or null
            name: 'Shoes',                              // sprite name
            fileNameBlurred: 'ShoesBlurred.png',        // blurry symbol file name, folder png/SymbolsBlurred
            animation: 'ShoesSheet.png',                // animation sheet file name, folder png/SymbolsSheet
            useWildSubstitute: true                     // use wild substitute for the symbol
        },
        {
            fileName: 'Tombak.png',           
            name: 'Tombak',                   
            fileNameBlurred: 'TombakBlurred.png', 
            animation: 'TombakSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Spades.png',          
            name: 'Spades',                   
            fileNameBlurred: 'SpadesBlurred.png', 
            animation: 'SpadesSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Ring.png',          
            name: 'Ring',                   
            fileNameBlurred: 'RingBlurred.png', 
            animation: 'RingSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Dagger.png',          
            name: 'Dagger',                   
            fileNameBlurred: 'DaggerBlurred.png', 
            animation: 'DaggerSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Crosses.png',          
            name: 'Crosses',                   
            fileNameBlurred: 'CrossesBlurred.png', 
            animation: 'CrossesSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Hearts.png',          
            name: 'Hearts',                   
            fileNameBlurred: 'HeartsBlurred.png', 
            animation: 'HeartsSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Diamonds.png',          
            name: 'Diamonds',                   
            fileNameBlurred: 'DiamondsBlurred.png', 
            animation: 'DiamondsSheet.png',
            useWildSubstitute: true
        },
        {
            fileName: 'Wild.png',          
            name: 'Wild',                   
            fileNameBlurred: 'WildBlurred.png', 
            animation: 'WildSheet.png',
            useWildSubstitute: false
        },
        {
            fileName: 'Scatter.png',          
            name: 'Scatter',                   
            fileNameBlurred: 'ScatterBlurred.png', 
            animation: 'ScatterSheet.png',
            useWildSubstitute: false
        },
        {
            fileName: null,          
            name: 'Jackpot',                   
            fileNameBlurred: null, 
            animation: null,
            useWildSubstitute: false
        }
    ],

    reels:[
        {//0
            symbolImages: ['Tombak', 'Dagger', 'Crosses', 'Tombak', 'Diamonds', 'Shoes', 'Ring', 'Hearts', 'Tombak', 'Spades', 'Scatter', 'Shoes'], 
            offsetX: -450,
            offsetY: -105 + 225,
            windowImage: 'reel',    // not used
            windowsCount: 2,    
            addSpinTime: 0, // additional spin time for reel milliseconds   
        },
        {//1
            symbolImages: ['Tombak', 'Shoes', 'Tombak','Diamonds', 'Dagger', 'Crosses', 'Shoes', 'Hearts','Spades', 'Ring', 'Scatter', 'Shoes', 'Tombak', 'Dagger', 'Ring', 'Shoes'], 
            offsetX: -225,
            offsetY: -105 + 225/2,
            windowImage: 'reel',        // not used
            windowsCount: 3,    
            addSpinTime: 100, // additional spin time for reel milliseconds   
        },
        { // 2
            symbolImages: ['Tombak', 'Hearts', 'Shoes', 'Diamonds', 'Shoes', 'Dagger', 'Crosses', 'Spades', 'Tombak', 'Ring'],
            offsetX: 0,
            offsetY: -105,
            windowImage: 'reel',        // not used
            windowsCount: 4,
            addSpinTime: 200, // additional spin time for reel milliseconds   
        },
        { // 3
            symbolImages: ['Shoes', 'Dagger', 'Crosses', 'Diamonds', 'Tombak', 'Shoes', 'Hearts', 'Spades', 'Tombak', 'Scatter', 'Shoes', 'Tombak','Ring'],
            offsetX: 225,
            offsetY: -105 + 225/2,
            windowImage: 'reel',        // not used
            windowsCount: 3,
            addSpinTime: 300, // additional spin time for reel milliseconds     
        },
        { // 4
            symbolImages: ['Shoes', 'Tombak', 'Shoes', 'Dagger', 'Crosses', 'Shoes', 'Diamonds', 'Spades', 'Scatter','Tombak', 'Hearts', 'Ring'],
            offsetX: 450,
            offsetY: -105 + 225,
            windowImage: 'reel',        // not used
            windowsCount: 2,
            addSpinTime: 400, // additional spin time for reel milliseconds     
        }
    ],

    // reels_simulate: [0, 0, -1, -1, -1],          // -1 - avoid reel simulate
    // reels_simulate: [9, 10, -1, -1, -1],         // scatter win 

/* 
    lines: [                    // predefined  slot lines positions 0 - most bottom window on reels
        [1, 1, 1, 1, 1],  // line 0 
        [1, 2, 2, 2, 1],  // line 1 
        [0, 0, 0, 0, 0],  // line 2
        [1, 2, 3, 2, 1],  // line 3 
        [1, 1, 3, 1, 1],  // line 4 
        [1, 0, 0, 0, 1],  // line 5 
        [1, 0, 1, 0, 1],  // line 6 
    ],
*/

    payLines:[
        {
            line: ['Shoes', 'Shoes', 'Shoes', 'Shoes', 'Shoes'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['Shoes', 'Shoes', 'Shoes', 'Shoes', 'any'],
            pay: 2,
            freeSpins: 0
        },
        {
            line: ['Shoes', 'Shoes', 'Shoes', 'any', 'any'],
            pay: 1,
            freeSpins: 0
        },
        {
            line: ['Tombak', 'Tombak', 'Tombak', 'Tombak', 'Tombak'],
            pay: 5,
            freeSpins: 0
        },
        {
            line: ['Tombak', 'Tombak', 'Tombak', 'Tombak', 'any'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['Tombak', 'Tombak', 'Tombak', 'any', 'any'],
            pay: 1,
            freeSpins: 0
        },
        {
            line: ['Dagger', 'Dagger', 'Dagger', 'Dagger', 'Dagger'],
            pay: 7,
            freeSpins: 0
        },
        {
            line: ['Dagger', 'Dagger', 'Dagger', 'Dagger', 'any'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['Dagger', 'Dagger', 'Dagger', 'any', 'any'],
            pay: 2,
            freeSpins: 0
        },
        {
            line: ['Ring', 'Ring', 'Ring', 'Ring', 'Ring'],
            pay: 8,
            freeSpins: 0
        },
        {
            line: ['Ring', 'Ring', 'Ring', 'Ring', 'any'],
            pay: 3,
            freeSpins: 0
        },
        {
            line: ['Ring', 'Ring', 'Ring', 'any', 'any'],
            pay: 2,
            freeSpins: 0
        },
        {
            line: ['Crosses', 'Crosses', 'Crosses', 'Crosses', 'Crosses'],
            pay: 17,
            freeSpins: 0
        },
        {
            line: ['Crosses', 'Crosses', 'Crosses', 'Crosses', 'any'],
            pay: 13,
            freeSpins: 0
        },
        {
            line: ['Crosses', 'Crosses', 'Crosses', 'any', 'any'],
            pay: 11,
            freeSpins: 0
        },
        {
            line: ['Diamonds', 'Diamonds', 'Diamonds', 'Diamonds', 'Diamonds'],
            pay: 19,
            freeSpins: 0
        },
        {
            line: ['Diamonds', 'Diamonds', 'Diamonds', 'Diamonds', 'any'],
            pay: 13,
            freeSpins: 0
        },
        {
            line: ['Diamonds', 'Diamonds', 'Diamonds', 'any', 'any'],
            pay: 11,
            freeSpins: 0
        },
        {
            line: ['Hearts', 'Hearts', 'Hearts', 'Hearts', 'Hearts'],
            pay: 20,
            freeSpins: 0
        },
        {
            line: ['Hearts', 'Hearts', 'Hearts', 'Hearts', 'any'],
            pay: 14,
            freeSpins: 0
        },
        {
            line: ['Hearts', 'Hearts', 'Hearts', 'any', 'any'],
            pay: 11,
            freeSpins: 0
        },
        {
            line: ['Spades', 'Spades', 'Spades', 'Spades', 'Spades'],
            pay: 25,
            freeSpins: 0
        },
        {
            line: ['Spades', 'Spades', 'Spades', 'Spades', 'any'],
            pay: 15,
            freeSpins: 0
        },
        {
            line: ['Spades', 'Spades', 'Spades', 'any', 'any'],
            pay: 11,
            freeSpins: 0
        },
    ],
    
    scatterPayTable:[
        {
            scattersCount: 5,
            pay: 0,
            freeSpins: 5
        }
    ],
    
    // jackpot settings - not used
    jackpot:
        {
            symbolName: null,
            symbolsCount: 6,
            defaultAmount: 1000,        // coins amout at start
            increaseValue: 1,           // jackpot increment after spin
        },

    createSlotGraphic: function(scene){
        // scene.background =  scene.addSpriteLocPos('background', 0, 0); //?.setScale(1.5);
        // scene.background.depth = -5;
/*
        scene.debugreference =  scene.addSpriteLocPos('debugreference', 0, -67); //?.setScale(1.5);
        scene.debugreference.depth = 2000;
        scene.debugreference.setAlpha(0.0);
*/
        // lamps
        /*
            scene.lampsArray = []; 
            scene.leftLamp = new Lamp (scene, -366, -490);
            scene.rightLamp = new Lamp (scene, 366, -490);
            scene.rightLamp.lamp.setScale(-1, 1); // mirror right lamp
            scene.lampsArray.push(scene.leftLamp);
            scene.lampsArray.push(scene.rightLamp);
            scene.leftLamp.on();
            scene.rightLamp.on();
        */

        scene.slot =  scene.addSpriteLocPos('slot', 0, -131); 
        scene.slot.depth = -1;
        // scene.paneljackpot =  scene.addSpriteLocPos('paneljackpot', 0, -450);    
        // scene.reelholdertop =  scene.addSpriteLocPos('reelholdertop', 0, -503);  
        scene.reelholderbot =  scene.addSpriteLocPos('reelholderbot', 0, 408);   
    },

    createReels: function(scene) {
        var _reels = [];
        for(var ri = 0; ri < this.reels.length; ri++)
        {
            _reels.push(new Reel(scene, this.reels[ri], ri, this.symbolSizeY, this.reels[ri].windowsCount, true, this.spinTime, this.symbAnimFrameRate));
        }
        return _reels;
    },

    createControls: function(scene, slotControls) {
        let depth = 11;

        // panels
        slotControls.linesPanel = scene.addSpriteLocPos('panel_lines', -567, 178 + 261); 
        slotControls.linesPanel.setDepth(depth); 
        slotControls.totalbetPanel = scene.addSpriteLocPos('panel_totalbet', -315, 178 + 261);
        slotControls.totalbetPanel.setDepth(depth); 
        slotControls.balancePanel = scene.addSpriteLocPos('panel_balance', 315, 178 + 261); 
        slotControls.balancePanel.setDepth(depth); 
        slotControls.winPanel = scene.addSpriteLocPos('panel_win', 567, 178 + 261); 
        slotControls.winPanel.setDepth(depth); 
        // slotControls.menuPanel = scene.addSpriteLocPos('panel_menu', -730, -230); 
        // slotControls.menuPanel.setDepth(depth); 
        // slotControls.menuPanel.setVisible(false);

        // totalbet minus button
        slotControls.totalBetMinusButton = new SceneButton(scene, 'button_minus','button_minus_hover', false);   
        slotControls.buttons.push(slotControls.totalBetMinusButton);
        slotControls.totalBetMinusButton.create(-315-100, 178 + 261, 0.5, 0.5);
        slotControls.totalBetMinusButton.addClickEvent(slotControls.lineBetMinus_Click, slotControls);
        slotControls.totalBetMinusButton.setDepth(depth); 
 
        // totalbet plus button
        slotControls.totalBetPlusButton = new SceneButton(scene, 'button_plus','button_plus_hover', false);   
        slotControls.buttons.push(slotControls.totalBetPlusButton);
        slotControls.totalBetPlusButton.create(-315 + 100, 178 + 261, 0.5, 0.5);
        slotControls.totalBetPlusButton.addClickEvent(slotControls.lineBetPlus_Click, slotControls);
        slotControls.totalBetPlusButton.setDepth(depth);        

        // maxbet button
        slotControls.slotMaxBetButton = new SceneButton(scene, 'button_maxbet', 'button_maxbet_hover', false);   
        slotControls.buttons.push(slotControls.slotMaxBetButton);
        slotControls.slotMaxBetButton.create(-100, 178 + 238, 0.5, 0.5);
        slotControls.slotMaxBetButton.addClickEvent(slotControls.maxBet_Click, slotControls);     
        slotControls.slotMaxBetButton.setDepth(depth); 
               
        // autoSpin button
        slotControls.slotAutoSpinButton = new SceneButton(scene, 'button_autospin', 'button_autospin_hover', true); 
        slotControls.buttons.push(slotControls.slotAutoSpinButton);
        slotControls.slotAutoSpinButton.create(100, 178 + 238, 0.5, 0.5);
        slotControls.slotAutoSpinButton.button.setVisible(true);   
        slotControls.changeAutoSpinModeEvent.add((autoSpin)=>
        {
            if (!autoSpin)
            {
                slotControls.slotAutoSpinButton.release();
            }
        }, this);
        slotControls.slotAutoSpinButton.setDepth(depth); 

        // spin button
        slotControls.slotSpinButton = new SpinButton(scene, 'button_spin', 'button_spin_hover', false);   
        slotControls.buttons.push(slotControls.slotSpinButton);
        slotControls.slotSpinButton.create(0, 173 + 233, 0.5, 0.5);    
        slotControls.slotSpinButton.clickEvent.add(scene.handleAnimation, scene);  
        slotControls.slotSpinButton.setDepth(depth); 

        // menu button
        slotControls.menuButton = new SceneButton(scene, 'button_menu', 'button_menu_hover', true);   
        slotControls.buttons.push(slotControls.menuButton);
        slotControls.menuButton.create(-770, -358, 0.5, 0.5);
        slotControls.menuButton.addClickEvent(()=>{ 
            console.log('menu click');
            slotControls.settingsButton.button.setVisible(!slotControls.settingsButton.button.visible);  
            slotControls.rulesButton.button.setVisible(!slotControls.rulesButton.button.visible); 
            slotControls.slotInfoButton.button.setVisible(!slotControls.slotInfoButton.button.visible); 
            // slotControls.menuPanel.setVisible(!slotControls.menuPanel.visible); 
            scene.soundController.playClip('button_click');}, this);
        slotControls.menuButton.button.setVisible(true); 
        slotControls.menuButton.setDepth(depth); 

        // settings button
        slotControls.settingsButton = new SceneButton(scene, 'button_settings', 'button_settings_hover', false);   
        slotControls.buttons.push(slotControls.settingsButton);
        slotControls.settingsButton.create(-770, -255, 0.5, 0.5);
        slotControls.settingsButton.addClickEvent(()=>{ 
            console.log('settings click');
            var pu = scene.guiController.showPopUp(this.createSettingsPUHandler);
            scene.soundController.playClip('button_click');}, this);
        slotControls.settingsButton.button.setVisible(false);  
        slotControls.settingsButton.setDepth(depth); 

        // sound button
        //slotControls.soundButton = new SceneButton(scene, 'button_on', 'button_off', true);   
        //slotControls.buttons.push(slotControls.soundButton);
        //slotControls.soundButton.create(-860, -300, 0.5, 0.5);
        //slotControls.soundButton.addClickEvent(()=>{scene.soundController.soundOn(!scene.soundController._soundOn);}, scene);
        //slotControls.soundButton.button.setVisible(true); 

        // lines loop button - not used
        // slotControls.slotLinesLoopButton = new SceneButton(scene, 'button_lines', 'button_lines_hover', false);   
        // slotControls.buttons.push(slotControls.slotLinesLoopButton);
        // slotControls.slotLinesLoopButton.create(-700, 212 + 220, 0.5, 0.5);
        // slotControls.slotLinesLoopButton.addClickEvent(slotControls.linesLoop_Click, slotControls);

        // lines minus button - not used
        // slotControls.linesMinusButton = new SceneButton(scene, 'button_minus','button_minus_hover', false);   
        // slotControls.buttons.push(slotControls.linesMinusButton);
        // slotControls.linesMinusButton.create(-610-68, 212 + 220, 0.5, 0.5);
        // slotControls.linesMinusButton.addClickEvent(slotControls.linesMinus_Click, slotControls);
        // slotControls.linesMinusButton.setDepth(depth); 
         
        // lines plus button - not used
        // slotControls.linesPlusButton = new SceneButton(scene, 'button_plus','button_plus_hover', false);   
        // slotControls.buttons.push(slotControls.linesPlusButton);
        // slotControls.linesPlusButton.create(-610 + 68, 212 + 220, 0.5, 0.5);
        // slotControls.linesPlusButton.addClickEvent(slotControls.linesPlus_Click, slotControls);
        // slotControls.linesPlusButton.setDepth(depth); 

       // rules button
       slotControls.rulesButton = new SceneButton(scene, 'button_rules', 'button_rules_hover', false);   
       slotControls.buttons.push(slotControls.rulesButton);
       slotControls.rulesButton.create(-770, -150, 0.5, 0.5);
       slotControls.rulesButton.addClickEvent(()=>{
           var pu = scene.guiController.showPopUp(this.createInfoPUHandler);
           scene.soundController.playClip('button_click');
       }, this);   
       slotControls.rulesButton.button.setVisible(false); 
       slotControls.rulesButton.setDepth(depth); 

       // info button
       slotControls.slotInfoButton = new SceneButton(scene, 'button_info', 'button_info_hover', false);   
       slotControls.buttons.push(slotControls.slotInfoButton);
       slotControls.slotInfoButton.create(-770, -45, 0.5, 0.5);
       slotControls.slotInfoButton.addClickEvent(()=>{
            console.log('info click');
           var pu = scene.guiController.showPopUp(this.createAboutPUHandler);
           scene.soundController.playClip('button_click');
       }, this);   
       slotControls.slotInfoButton.button.setVisible(false); 
       slotControls.slotInfoButton.setDepth(depth); 

       // hold buttons - not used
        slotControls.holdButtons = [];
        for(var ri = 0; ri < this.reels.length; ri++)
        {
            var butt = 'holdButton' + ri;
            slotControls[butt] = new SceneButton(scene, 'button_hold', 'button_hold_on', true);   
            slotControls.buttons.push(slotControls[butt]);
            slotControls.holdButtons.push(slotControls[butt]);
            slotControls[butt].create(-492 + ri*246, -565, 0.5, 0.5);
            slotControls[butt].setDepth(depth); 
            slotControls[butt].button.setVisible(false);   // disable hold button
            slotControls[butt].reelNumber = ri;
        }

        // adding the text fields
        slotControls.linesText = scene.add.bitmapText(scene.centerX - 572, scene.centerY + 120 + 263, 'gameFont_2', 'Lines', 36, 1).setOrigin(0.5);
        slotControls.linesText.depth = depth;
        slotControls.linesCountText = scene.add.bitmapText(scene.centerX - 570, scene.centerY + 178 + 262, 'gameFont_2', slotControls.selectedLinesCount, 42, 1).setOrigin(0.5);
        slotControls.linesCountText.depth = depth;

        slotControls.lineBetAmountText = scene.add.bitmapText(scene.centerX - 442, scene.centerY + 125 + 220, 'gameFont_2', slotControls.lineBet, 42, 1).setOrigin(0.5);
        slotControls.lineBetAmountText.setVisible(false);
        slotControls.lineBetAmountText.depth = depth;
 
        slotControls.totalBetText = scene.add.bitmapText(scene.centerX - 315, scene.centerY + 120 + 263, 'gameFont_2', 'Total  Bet', 36, 1).setOrigin(0.5);
        slotControls.totalBetText.depth = depth;
  
        slotControls.totalBetSumText = scene.add.bitmapText(scene.centerX - 315, scene.centerY + 178 + 262, 'gameFont_2', slotControls.getTotalBet(), 42, 1).setOrigin(0.5);
        slotControls.totalBetSumText.depth = depth;
 
        slotControls.creditText = scene.add.bitmapText(scene.centerX + 315, scene.centerY + 120 + 263, 'gameFont_2', 'Balance', 36, 1).setOrigin(0.5);
        slotControls.creditText.depth = depth;

        slotControls.creditSumText = scene.add.bitmapText(scene.centerX + 315, scene.centerY + 178 + 262, 'gameFont_2', '' + scene.slotPlayer.coins, 42, 1).setOrigin(0.5);
        slotControls.creditSumText.depth = depth;
         
        slotControls.winText = scene.add.bitmapText(scene.centerX + 570, scene.centerY + 120 + 263, 'gameFont_2', 'Your  Win', 36, 1).setOrigin(0.5);
        slotControls.winText.depth = depth;

        slotControls.winAmountText = scene.add.bitmapText(scene.centerX + 567, scene.centerY + 178 + 262, 'gameFont_2', '0', 42, 1).setOrigin(0.5);
        slotControls.winAmountText.depth = depth;

        slotControls.jackpotAmountText = scene.add.bitmapText(scene.centerX + 0, scene.centerY - 687 + 220, 'gameFont_2', '0', 42, 1).setOrigin(0.5);
        slotControls.jackpotAmountText.setVisible(false);
        slotControls.jackpotAmountText.depth = depth;

        slotControls.autoSpinText = scene.add.bitmapText(scene.centerX + 122, scene.centerY + 163 + 220, 'gameFont_2', 'AUTO', 37, 1).setOrigin(0.5);
        slotControls.autoSpinText.setLetterSpacing(-5);
        slotControls.autoSpinText.depth = depth;
        slotControls.autoSpinText.setVisible(false);

        slotControls.autoSpinText1 = scene.add.bitmapText(scene.centerX + 122, scene.centerY + 190 + 220, 'gameFont_2', 'SPIN', 37, 1).setOrigin(0.5);
        slotControls.autoSpinText1.setLetterSpacing(-1);
        slotControls.autoSpinText1.depth = depth;
        slotControls.autoSpinText1.setVisible(false);

        slotControls.maxBetText = scene.add.bitmapText(scene.centerX - 122, scene.centerY + 163 + 220, 'gameFont_2', 'MAX', 37, 1).setOrigin(0.5);
        slotControls.maxBetText.setLetterSpacing(-6);
        slotControls.maxBetText.depth = depth;
        slotControls.maxBetText.setVisible(false);

        slotControls.maxBetText1 = scene.add.bitmapText(scene.centerX - 124, scene.centerY + 190 + 220, 'gameFont_2', 'BET', 37, 1).setOrigin(0.5);
        slotControls.maxBetText1.setLetterSpacing(4);
        slotControls.maxBetText1.depth = depth;
        slotControls.maxBetText1.setVisible(false);
        
        slotControls.spinText = scene.add.bitmapText(scene.centerX - 0, scene.centerY + 200 + 208, 'gameFont_1', 'SPIN', 42, 1).setOrigin(0.5);
        slotControls.spinText.depth = depth;
        slotControls.spinText.tint = 0xf3d1ae;
        // slotControls.spinText.setVisible(false);

        slotControls.infoText = scene.add.bitmapText(scene.centerX, scene.centerY + 400 + 200, 'gameFont_2', 'info', 30, 1).setOrigin(0.5);
        slotControls.infoText.setVisible(false);
        slotControls.infoText.depth = depth;

        slotControls.freeSpinCountText = scene.add.bitmapText(scene.centerX, scene.centerY + 400 + 200, 'gameFont_1', '99', 130, 1).setOrigin(0.5); // not used
        slotControls.freeSpinCountText.setVisible(false);
        slotControls.freeSpinCountText.depth = depth;

        // hold text
        // slotControls.holdMultiplierTextL = scene.add.bitmapText(scene.centerX - 685, scene.centerY - 130, 'gameFont_2', '1', 100, 1).setOrigin(0.5);      // left side text
        // slotControls.holdMultiplierTextL.setVisible(true);
        // slotControls.holdMultiplierTextL.depth = depth;

        // slotControls.holdMultiplierTextR = scene.add.bitmapText(scene.centerX + 685, scene.centerY - 130, 'gameFont_2', '1', 100, 1).setOrigin(0.5);      // right side text
        // slotControls.holdMultiplierTextR.setVisible(true);
        // slotControls.holdMultiplierTextR.depth = depth;

        // slotControls.hold = new HoldFeature(scene, slotControls.holdButtons, this.maxHold); // create hold feature - not used

        slotControls.respinFeature = new RespinFeatureArabic(scene, depth);      // create respin feature or comment the line if you don’t need it
    },
   
    createInfoPUHandler: function(popup)
    {
        function createSymbolPlate5x (popup, parentContainer, symbSpriteName, posX, posY, price3x,price4x, price5x)
        {
            let symbContainer = popup.scene.add.container(posX, posY);
            parentContainer.add(symbContainer);
            let symbIcon = popup.scene.add.sprite(-140, 0, symbSpriteName).setOrigin(0.5).setScale(0.8);
            symbContainer.add(symbIcon);
    
            let textXPos = -0;
            let text3x = popup.scene.add.bitmapText(textXPos, 48, 'gameFont_1', '3X', 42, 1).setOrigin(0, 0.5);
            text3x.tint = 0xd675dc;
            symbContainer.add(text3x);
            let text3x1 = popup.scene.add.bitmapText(textXPos + 55, 48, 'gameFont_1', '- ' + price3x, 42, 1).setOrigin(0, 0.5);
            text3x1.tint = 0xd675dc;
            symbContainer.add(text3x1);
    
            let text4x = popup.scene.add.bitmapText(textXPos, 0, 'gameFont_1', '4X', 42, 1).setOrigin(0, 0.5);
            text4x.tint = 0xd675dc;
            symbContainer.add(text4x);
            let text4x1 = popup.scene.add.bitmapText(textXPos + 55, 0, 'gameFont_1', '- ' + price4x, 42, 1).setOrigin(0, 0.5);
            text4x1.tint = 0xd675dc;
            symbContainer.add(text4x1);

            let text5x = popup.scene.add.bitmapText(textXPos, -48, 'gameFont_1', '5X', 42, 1).setOrigin(0, 0.5);
            text5x.tint = 0xd675dc;
            symbContainer.add(text5x);
            let text5x1 = popup.scene.add.bitmapText(textXPos + 55, -48, 'gameFont_1', '- ' + price5x, 42, 1).setOrigin(0, 0.5);
            text5x1.tint = 0xd675dc;
            symbContainer.add(text5x1);
        };

        function createSpecSymbolPlate(popup, parentContainer, symbSpriteName, posX, posY, info)
        {
            let symbContainer = popup.scene.add.container(posX, posY);
            parentContainer.add(symbContainer);
            let symbIcon = popup.scene.add.sprite(0, 0, symbSpriteName).setOrigin(0.5, 0.5).setScale(0.8);
            symbContainer.add(symbIcon);
    
            let textInfo = popup.scene.add.bitmapText(145, 0, 'gameFont_1', info, 34, 0).setOrigin(0, 0.5);
            textInfo.tint = 0xd675dc;
            symbContainer.add(textInfo);
        };
    
        function refreshInfoPu (containers, selectors, index)
        {
            for(let i = 0; i < containers.length; i++)
            {
                containers[i].visible = (index === i);
                if(popup.scene.textures.exists('navi_dot_active') && popup.scene.textures.exists('navi_dot'))
                {
                    selectors[i].setTexture((index === i) ? 'navi_dot_active' : 'navi_dot');
                }
            }
        };

        let index = 0;
        let containers = [];
        let selectors = [];
        let offsetY = -70;

        // add background and panel
        let backGround = popup.scene.add.sprite(0, -20 + offsetY, 'pu_background').setOrigin(0.5).setScale(1, 1.05);
        backGround.setInteractive(); // block bottom controls

        popup.add(backGround);
        let panel = popup.scene.add.sprite(0, -33 + offsetY, 'info_panel').setOrigin(0.5);
        popup.add(panel);

        let title = popup.scene.add.sprite(0, -388 + offsetY, 'help_title').setOrigin(0.5);
        popup.add(title);

        popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 610, -310 + offsetY);
        popup.addButton('nextButton','next_button', 'next_button_hover', false, 58, 400 + offsetY);
        popup.addButton('prevButton','prev_button', 'prev_button_hover', false, -58, 400 + offsetY);
        popup['exitButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['nextButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['prevButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);

        popup['exitButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});

        popup['nextButton'].clickEvent.add(()=>
        {
            if(index < containers.length - 1) index++;
            else index = 0;
            refreshInfoPu(containers, selectors, index);
        }, this);

        popup['prevButton'].clickEvent.add(()=>
        {
            if(index > 0) index--;
            else index = containers.length - 1;
            refreshInfoPu(containers, selectors, index);
        }, this);

        // create paylines panel
        let linesContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(linesContainer);
        popup.add(linesContainer);
        let linesTitle = popup.scene.add.bitmapText(0, -290, 'gameFont_2', 'PAY LINES', 42, 1).setOrigin(0.5); // text  popup.scene.add.sprite(0, -305, 'paylines_title').setOrigin(0.5);
        linesContainer.add(linesTitle);
        // let linesTable =  popup.scene.add.sprite(0, 30, 'paylines_table').setOrigin(0.5);
        // linesContainer.add(linesTable);
        let linesText = popup.scene.add.bitmapText(0, -30, 'gameFont_2', 'All paylines!\nSame symbols pay left to right along pay lines.\nOnly the highest win is paid for each combination of symbols.\n Minimum bet for playing is 144 coins. Wins are multiplied by the bet multiplier.', 36, 1).setOrigin(0.5);
        linesContainer.add(linesText);

        // create minor symbols panel
        let minorContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(minorContainer);
        popup.add(minorContainer);
        let minorTitle = popup.scene.add.bitmapText(0, -290, 'gameFont_2', 'MINOR SYMBOLS', 42, 1).setOrigin(0.5); // popup.scene.add.sprite(0, -410, 'minor_title').setOrigin(0.5); // image
        minorContainer.add(minorTitle);

        let row1Y = -100;
        let row2Y = row1Y + 240;
        let col1X = -395;
        let colDist = 440;
        let col2X = col1X + colDist;
        let col3X = col2X + colDist;

        // minor row 1
        createSymbolPlate5x(popup, minorContainer, 'Shoes',  col1X + 0.5 * colDist, row1Y, 1, 2, 3);
        createSymbolPlate5x(popup, minorContainer, 'Tombak', col2X + 0.5 * colDist, row1Y, 1, 3, 5);

        // minor row 2
        createSymbolPlate5x(popup, minorContainer, 'Dagger', col1X + 0.5 * colDist, row2Y, 2, 3, 7);
        createSymbolPlate5x(popup, minorContainer, 'Ring', col2X + 0.5 * colDist, row2Y, 2, 3, 8);
        minorContainer.visible = false;

        // create major symbols panel
        let majorContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(majorContainer);
        popup.add(majorContainer);
        let majorTitle = popup.scene.add.bitmapText(0, -290, 'gameFont_2', 'MAJOR  SYMBOLS', 42, 1).setOrigin(0.5); // popup.scene.add.sprite(0, -410, 'major_title').setOrigin(0.5); // image
        majorContainer.add(majorTitle);

        // major row 1
        createSymbolPlate5x(popup, majorContainer , 'Crosses', col1X + 0.5 * colDist, row1Y, 11, 13, 17);
        createSymbolPlate5x(popup, majorContainer , 'Diamonds', col2X + 0.5 * colDist, row1Y, 11, 13, 19);

        // major row 2
        createSymbolPlate5x(popup, majorContainer , 'Hearts', col1X + 0.5 * colDist, row2Y, 11, 14, 20);
        createSymbolPlate5x(popup, majorContainer , 'Spades', col2X + 0.5 * colDist, row2Y, 11, 15, 25);
        majorContainer.visible = false;

        // create special symbols panel
        let specialContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(specialContainer);
        popup.add(specialContainer);
        let specialTitle = popup.scene.add.bitmapText(0, -290, 'gameFont_2', 'SPECIAL  SYMBOLS', 42, 1).setOrigin(0.5); // popup.scene.add.sprite(0, -410, 'special_title').setOrigin(0.5); // image
        specialContainer.add(specialTitle);
    
        // special row 1
        createSpecSymbolPlate(popup, specialContainer, 'Wild', -423, -140, 'Wild can be used with any symbols on the reels to create \nwinning combinations (exclude first reel).');
        createSpecSymbolPlate(popup, specialContainer, 'Scatter', -423 , 125 , 
        'The game proceeds with the accumulation of scatters. Every four scatters \n'+
        'raise the stage of the game, increase the reward in the chest (10, 20, 30,\n'+
        '40 coins) and give the opportunity to open chests. One chest is full of coins, \n'+
        'the other is almost empty. After reaching each stage, a lamp appears above \n'+
        'the slot reel. When all four lamps have appeared, the player receives 4 respins.\n'+
        'Each scatter symbol during respins gives an additional respin. After the end of \n'+
        'the respins, the game stage is reset to default.');
        // createSpecSymbolPlate(popup, specialContainer, 'Jackpot', -490 , 225 + 10 , 'Any 6 jackot symbols scattered on the screen = Jackpot Win.');
        specialContainer.visible = false;

        // create rules panel
        let rulesContainer = popup.scene.add.container(0, 0 + offsetY);
        containers.push(rulesContainer);
        popup.add(rulesContainer);
        let rulesTitle =  popup.scene.add.bitmapText(0, -290, 'gameFont_2', 'RULES', 42, 1).setOrigin(0.5); //popup.scene.add.sprite(0, -410, 'rules_title').setOrigin(0.5); // image
        rulesContainer.add(rulesTitle);

        let aboutTitle = popup.scene.add.bitmapText(-540, -180, 'gameFont_2', 'About the game', 42, 0).setOrigin(0,0.5); // text
        rulesContainer.add(aboutTitle);
        //aboutTitle.tint = 0xda3b0b;
        let aboutText = popup.scene.add.bitmapText(-540, -150, 'gameFont_1',
        'Wild West slot is a pack of Slot Games with 5 reels and 20 paylines oriented from left to right. The games \nhave 8 regular symbols that win if three or  more  are  lined  up in sequence  on  a  payline, beginning from \nthe leftmost  position. The 4  high  pay symbols  and the 4 low pay symbols.', 34, 0).setOrigin(0, 0); // text
        aboutText.tint = 0xd675dc;
        rulesContainer.add(aboutText);


        let howTitle = popup.scene.add.bitmapText(-540, 50, 'gameFont_2', 'How to play', 42, 0).setOrigin(0,0.5); // text
        rulesContainer.add(howTitle);
        //howTitle.tint = 0xda3b0b;
        let howText = popup.scene.add.bitmapText(-540, 80, 'gameFont_1',
        '- Place your bet \n- Press the Spin button to start game \n- You can also use Max Bet button to auto bet \n- Press the AutoSpin button to turn Auto Spin game mode', 34, 0).setOrigin(0, 0); // text
        howText.tint = 0xd675dc;
        rulesContainer.add(howText);

        // create navi selectors
        let dotDist = 50;
        let offsetDots = dotDist * (containers.length - 1) / 2;
        if(popup.scene.textures.exists('navi_dot_active') && popup.scene.textures.exists('navi_dot'))
        {
            for(let i = 0; i < containers.length; i++)
            {
                var selector = popup.scene.add.sprite(-offsetDots + i * dotDist, 440 + offsetY, 'navi_dot').setOrigin(0.5);
                selectors.push(selector);
                popup.add(selector);
            }
        }
        refreshInfoPu(containers, selectors, index);
    },

    createAboutPUHandler: function(popup)
    {     
        let yOffset = -70;
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);

        let panel = popup.scene.add.sprite(0, 10 + yOffset, 'about_panel').setOrigin(0.5);
        popup.add(panel);

        // add title
        // popup.title = popup.scene.add.bitmapText(0, -145 + yOffset, 'gameFont_1', 'About', 80, 1).setOrigin(0.5);
        // popup.add(popup.title);

        // add logo
        let logo = popup.scene.add.sprite(0, -40 + yOffset, 'logo').setOrigin(0.5);
        popup.add(logo);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 125 + yOffset, 'gameFont_2', 'Need Help?', 42, 1).setOrigin(0.5);
        popup.messageText.setLetterSpacing(2);
        popup.add(popup.messageText);

        // add buttons
        popup.addButton('supportButton','long_button', 'long_button_hover', false, 0, 190 + yOffset);
        popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 165, -242  + yOffset);

        popup['supportButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['supportButton'].clickEvent.add(()=>{window.open("http://www.mkeystudio.com"); }, popup);
        
        popup['exitButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['exitButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});

        // add support button text
        popup.supText = popup.scene.add.bitmapText(0, 192 + yOffset, 'gameFont_2', 'SUPPORT', 42, 1).setOrigin(0.5);
        popup.supText.setLetterSpacing(2);
        popup.add(popup.supText);
    },

    createSettingsPUHandler: function(popup)
    {    
        function refreshIcons (popup)
        {
            popup.soundIcon.setTexture( popup.scene.soundController._soundOn ? 'soundon' : 'soundoff');
            popup.musicIcon.setTexture( popup.scene.soundController._musicOn ? 'musicon' : 'musicoff');
            console.log('refresh');
        }

        let yOffset = -70;   
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0+ yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);

        let panel = popup.scene.add.sprite(0, 10 + yOffset, 'settings_panel').setOrigin(0.5);
        popup.add(panel);

        // add title
        // let title = popup.scene.add.sprite(0, -300 + yOffset, 'settings_title').setOrigin(0.5);
        // popup.add(title);

        // sound and music text
        popup.soundText = popup.scene.add.bitmapText(-92, -120 + yOffset, 'gameFont_2', 'Sounds', 42, 1).setOrigin(0.5);
        popup.add(popup.soundText);

        popup.musicText = popup.scene.add.bitmapText(90, -120 + yOffset, 'gameFont_2', 'Music', 42, 1).setOrigin(0.5);
        popup.add(popup.musicText);

        // sound and music buttons
        popup.addButton('soundButton','button_on', 'button_off', true, -92, -45 + yOffset);
        popup.addButton('musicButton','button_on', 'button_off', true,  90, -45 + yOffset);

        popup['soundButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['soundButton'].clickEvent.add(()=>{popup.scene.soundController.soundOn(!popup.scene.soundController._soundOn);}, popup);
        if(!popup.scene.soundController._soundOn) popup['soundButton'].setPressed();

        popup['musicButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['musicButton'].clickEvent.add(()=>{popup.scene.soundController.musicOn(!popup.scene.soundController._musicOn);}, popup);
        if(!popup.scene.soundController._musicOn) popup['musicButton'].setPressed();

        // privacy ant terms buttons
        popup.addButton('privacyButton','extralong_button', 'extralong_button_hover', false, -2, 88 + yOffset);
        popup.addButton('exitButton','exit_button', 'exit_button_hover', false, 212, -243 + yOffset);
        popup.addButton('termsButton','extralong_button', 'extralong_button_hover', false, -2, 190 + yOffset);

        popup['privacyButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['privacyButton'].clickEvent.add(()=>{window.open("http://www.mkeystudio.com"); }, popup);
        
        popup['termsButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['termsButton'].clickEvent.add(()=>{window.open("http://www.mkeystudio.com"); }, popup);

        popup['exitButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['exitButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});

        // privacy ant terms buttons text
        popup.privacyText = popup.scene.add.bitmapText(2, 88 + yOffset, 'gameFont_2', 'PRIVACY POLICY', 42, 1).setOrigin(0.5);
        popup.privacyText.setLetterSpacing(1.3);
        popup.add(popup.privacyText);

        popup.termsText = popup.scene.add.bitmapText(2, 190 + yOffset, 'gameFont_2', 'TERMS OF USE', 42, 1).setOrigin(0.5);
        popup.termsText.setLetterSpacing(1.3);
        popup.add(popup.termsText);
    },

    createFreeGamesPUHandler: function(popup)
    {
        let yOffset = -70;   
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        let panel = popup.scene.add.sprite(0, -50 + yOffset, 'freespin_panel').setOrigin(0.5);
        popup.add(panel);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, -42 + yOffset, 'gameFont_2', '0', 42, 1).setOrigin(0.5);
        popup.messageText.setLetterSpacing(1.4);
        popup.add(popup.messageText);

        // add buttons
        popup.addButton('okButton','long_button', 'long_button_hover', false, 0, 140 + yOffset);
        popup['okButton'].clickEvent.add(()=>{popup.scene.soundController.playClip('button_click', false);}, popup);
        popup['okButton'].clickEvent.add(()=>{popup.scene.guiController.closePopUp(popup);});
        // add button text
        popup.okText = popup.scene.add.bitmapText(0, 140 + yOffset, 'gameFont_2', 'START', 42, 1).setOrigin(0.5);
        popup.add(popup.okText);
    },

    createFreeSpinsWinPUHandler: function(popup)
    {
        let yOffset = -70;   
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.01);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'freespin_panel').setOrigin(0.5);
        popup.add(panel);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 7 + yOffset, 'gameFont_2', '0', 42, 1).setOrigin(0.5);
        popup.messageText.setLetterSpacing(1.4);
        popup.add(popup.messageText);
    },

    createBigWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
 
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'bigwin_panel').setOrigin(0.5);
        popup.add(panel);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 23 + yOffset, 'gameFont_2', '0', 42, 1).setOrigin(0.5);
        popup.messageText.setLetterSpacing(1.4);
        popup.add(popup.messageText);
    },

    createHugeWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'hugewin_panel').setOrigin(0.5);
        popup.add(panel);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 23 + yOffset, 'gameFont_2', '0', 42, 1).setOrigin(0.5);
        popup.messageText.setLetterSpacing(1.4);
        popup.add(popup.messageText);
    },

    createMegaWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);
        // backGround.setAlpha(0.5);
        let panel = popup.scene.add.sprite(0, 0 + yOffset, 'megawin_panel').setOrigin(0.5);
        popup.add(panel);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 23 + yOffset, 'gameFont_2', '0', 42, 1).setOrigin(0.5);
        popup.messageText.setLetterSpacing(1.4);
        popup.add(popup.messageText);
    },

    createJackpotWinPUHandler: function(popup)
    {
        let yOffset = -70; 
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0 + yOffset, 'pu_background').setOrigin(0.5).setScale(1);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);

        let panel = popup.scene.add.sprite(-5, -50 + yOffset, 'jackpotwin_panel').setOrigin(0.5);
        popup.add(panel);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 0 + yOffset, 'gameFont_2', '0', 42, 1).setOrigin(0.5);
        popup.messageText.setLetterSpacing(1.4);
        popup.add(popup.messageText);
    },

    // just for blocking controls
    createEmptyPUHandler: function(popup)
    {
        // add background and panel
        let backGround = popup.scene.add.sprite(0, 0, 'gray_01').setOrigin(0.5).setScale(1000);
        backGround.setInteractive(); // block bottom controls
        popup.add(backGround);

      // popup.debugText = popup.scene.add.bitmapText(0, 0, 'gameFont_2', 'EMPTY PU', 55, 1).setOrigin(0.5);
      // popup.add(popup.debugText);
    },

    createChestWinPUHandler: function(popup)
    {
        let yOffset = -70;   
        let panel = popup.scene.add.sprite(0, -0 + yOffset, 'chestwin_panel').setOrigin(0.5);
        popup.add(panel);

        // add message
        popup.messageText = popup.scene.add.bitmapText(0, 8 + yOffset, 'gameFont_2', '0', 42, 1).setOrigin(0.5);
        popup.messageText.setLetterSpacing(1.4);
        popup.add(popup.messageText);
    },
}

class AnimatedCoinParticle extends Phaser.GameObjects.Particles.Particle
{
    constructor (emitter)
    {
        super(emitter);

        this.t = 0;
        this.i = 0;
        this.framesCount = 7;
    }
	
    update (delta, step, processors)
    {
        var result = super.update(delta, step, processors);
        this.t += delta;

        if (this.t >= coinSpinAnim.msPerFrame)
        {
            this.i++;
            if (this.i > this.framesCount-1)
            {
                this.i = 0;
            }
            this.frame = coinSpinAnim.frames[this.i].frame;
            this.t -= coinSpinAnim.msPerFrame;
        }
        return result;
    }
}

class RespinFeatureArabic
{
    constructor(scene, depth)
    {
        this.scene = scene;
        this.reels = scene.reels;
        this.depth = depth;
        this.respinMarkers = [];
        this.respinsReward = 4; // free spin for respin feature

        var markers = [
            {
                x: -510,
                y: -185, 
                sliderX: -505,
                sliderY: -170,
                chestCoins: 10
            },
            {
                x: -285,
                y: -410,
                sliderX: -280,
                sliderY: -465 + 70,
                chestCoins: 20
            },
            {
                x: 265,
                y: -410,
                sliderX: 285,
                sliderY: -465 + 70,
                chestCoins: 30
            },
            {
                x: 490,
                y: -185,
                sliderX: 510,
                sliderY: -240 + 70,
                chestCoins: 50
            }
        ];

        for(var ri = 0; ri < markers.length; ri++)
        {
            var marker = scene.addSpriteLocPos('respin_lamp', markers[ri].x, markers[ri].y); 
            marker.setOrigin(0.5, 1);
            marker.setScale(0.4, 0.4);
            marker.chestCoins = markers[ri].chestCoins; 
            this.respinMarkers.push(marker);
            marker.setDepth(depth + 3); 
            marker.setVisible(true); 
            marker.number = ri;
            marker.progress = new ProgressSlider(scene, markers[ri].sliderX, markers[ri].sliderY, 'progress_base', markers[ri].sliderX, markers[ri].sliderY, 'progress_fill', 'progress_spot', depth);
        }

        this.respinsCount = 0;
        this.respinModeStarted = false;
        this.startRespinsEvent = new MKEvent();
        this.endRespinsEvent = new MKEvent();
        this.stages = this.respinMarkers.length;    // 4
        this.scattersPerStage = 4;
        this.currenStage = -1;
        this.newStageFlag = false;

        this.landedScatters = [];
        this.scatter = slotConfig.scatter;
        this.scattersCount = 0;                     // collected scatters during game

        // chest buttons
        this.leftChestButton = new SceneButton(scene, 'chest_closed','chest_opened', true);   
        this.leftChestButton.create(-720, 358, 0.5, 1);
        this.leftChestButton.addClickEvent(()=>{
            this.chestClickHand(true);
        }, this);   
        this.leftChestButton.setDepth(depth + 1); 
        this.leftChestButton.setInteractable(false);

        this.rightChestButton = new SceneButton(scene, 'chest_closed','chest_opened', true);   
        this.rightChestButton.create(720, 358, 0.5, 1);
        this.rightChestButton.addClickEvent(()=>{
            this.chestClickHand(false);
        }, this);   
        this.rightChestButton.setDepth(depth + 1); 
        this.rightChestButton.setInteractable(false);

        // disable markers
        this.respinMarkers.forEach((rm)=>
        {
            this.setVisible(rm, false);
        });

        this.scene.startSpinEvent.add(()=>{
            this.resetChests();
         }, this);

        // add reel eventhandler
        this.reels.forEach((reel)=>
        {
            reel.endSpinEvent.add(()=>
            {
                // console.log('spin complete: ' + reel.reelNumber);
            }, this);
        });

        this.scene.endWinSearchEvent.add((win)=>
        { 
            if(this.respinsCount > 0) this.respinsCount--; // apply 1 respin 
            this.landedScatters = [];
            this.newStageFlag = false;

            // fill arrays landedScatters
            this.reels.forEach((reel)=>
            {                
                var temp = reel.findWindowsSymbols(this.scatter);
                if(temp.length > 0) {
                    this.landedScatters.push(...temp);
                }
            });

            // calculate scatters, stage, win spins, respins
            let newStage = this.getNewStage(this.landedScatters.length);
            this.winSpins = (this.respinModeStarted) ? this.landedScatters.length : 0;
            if(this.respinModeStarted) this.respinsCount += this.winSpins;
            this.scattersCount += this.landedScatters.length; // accumulate scatters

            if(this.landedScatters.length > 0) scene.setSideWinFlag();

            if(newStage > this.currenStage)
            {
                this.newStageFlag = true;
                this.setChestsGift(newStage);
            }
            // check for respin state (all markers enabled)
            if(!this.respinModeStarted && (newStage == this.stages - 1))    // add respinsReward
            {  
                this.respinModeStarted = true;
                this.respinsCount = this.respinsReward;
                this.winSpins += this.respinsCount;
                this.respinModeStarted = true;
                this.startRespinsEvent.invoke();
            }  
            else if(this.respinModeStarted == true &&  this.respinsCount == 0) // reset stage, remove markers
            {
                this.respinModeStarted = false;
                this.scattersCount = 0;
                newStage = -1;
                this.trySetMarkers();
                this.endRespinsEvent.invoke();
            }

            this.currenStage = newStage;

        }, this);

        this.scene.endWinShowEvent.add(()=>{          
            if(this.landedScatters.length != 0) {   
                this.trySetMarkers();   
                
                this.showEmptyPU(1000 + ((this.winSpins > 0) ?  slotConfig.winMessageTime : 0));     //empty popup,  just delay, wait scatter animation 
                this.playScatterAnim(()=>{              
                    if(this.winSpins > 0) 
                    {
                        this.scene.slotControls.addFreeSpins(this.winSpins);
                        if(this.newStageFlag && this.respinModeStarted)  // respin mode message
                        {                
                            var fgPU = this.scene.guiController.showPopUp(slotConfig.createFreeGamesPUHandler);
                            fgPU.messageText.text = this.winSpins;
                        }
                        else this.scene.showWinFreeSpinsMessage(this.winSpins, slotConfig.winMessageTime); // self closing message
                    }
                });
            }

        }, this);

        this.scene.endWinShowEvent_1.add(()=>{          
            if(this.newStageFlag == true) {   
                this.showChectMiniGame();
            }
        }, this);

        this.startRespinsEvent.add(()=>{
            // console.log('start respins');
            }, this);

        this.endRespinsEvent.add(()=>{
            // console.log('end respins');
            }, this);
    }

    isFullMarked()
    {
        for(let i = 0; i < this.respinMarkers.length; i++)
        {
            if(this.respinMarkers[i].isEnabled == false) return false;
        }
        return true;
    }

    setVisible(marker, visible)
    {
        if(marker.isEnabled == visible) return;
        marker.setVisible(visible);    
        marker.isEnabled = visible;
        if(visible) { this.playAnim(marker); }
    }

    playScatterAnim(completeCallBack)       // sprite animation
    {
        // show animation
        this.landedScatters.forEach((s)=>{
            s.showAnim(true);
        });

         // play sound
         new SimpleTweenFloat(this, 0, 1, 500, (p, dp) =>{ },  ()=>
         {
            this.scene.soundController.playClip('scatter_clip', false);   
         }); // just delay action  


        // disable animation
        new SimpleTweenFloat(this, 0, 1, 1000, (p, dp) =>{ },  ()=>
        {
            this.landedScatters.forEach((s)=>{
                s.showAnim(false);
            });    
        }); // just delay action  

        // replace scatters with wilds
        new SimpleTweenFloat(this, 0, 1, 1000, (p, dp) =>{ },  ()=>
        {  
         
           // this.setWilds();
            completeCallBack();
            console.log('scatter anim complete');
        }); // just delay action   
    }

    playAnim(marker)                        // marker transform animation
    {
        marker.initialPositionY = marker.y;     // can be changed during animation
        marker.initialPositionX = marker.x;     // can be changed during animation
        var offsetY = 40;
        marker.setPosition(marker.initialPositionX, marker.initialPositionY + offsetY);
        var sA = new SequencedActions();        // simple sequenced transform animation

        sA.add((callBack) =>{
            new SimpleTweenFloat(this, marker.initialPositionY + offsetY, marker.initialPositionY, 100, 
                (p, dp)=>{
                    marker.setPosition(marker.initialPositionX, p);
                }, 
                ()=>{
                    marker.setPosition(marker.initialPositionX, marker.initialPositionY);
                    this.scene.soundController.playClip('respin_clip', false);   
                    callBack();
                } );
        }, this);

        sA.add((callBack) =>{
            new SimpleTweenFloat(this, 0, 10, 100, 
                (p, dp)=>{
                    marker.angle = p;
                }, 
                ()=>{
                    callBack();
                } );
        }, this);

        sA.add((callBack) =>{
            new SimpleTweenFloat(this, 10, -10, 200, 
                (p, dp)=>{
                    marker.angle = p;
                }, 
                ()=>{
                    callBack();
                } );
        }, this);

        sA.add((callBack) =>{
            new SimpleTweenFloat(this, -10, 0, 100, 
                (p, dp)=>{
                    marker.angle = p;
                }, 
                ()=>{
                    marker.angle = 0;
                    callBack();
                } );
        }, this);
        sA.start();
    }

    getNewStage(scCount)
    {
        if(scCount <= 0) return this.currenStage;
        var _stage = Math.floor((this.scattersCount + scCount) / this.scattersPerStage) - 1; //-1, 0, 1, 2, 3
        if(_stage > 3) _stage = 3;
        return _stage;
    }

    trySetMarkers()
    {
        var _stage = Math.floor(this.scattersCount / this.scattersPerStage); // 0, 1, 2, 3, 4
        var fullProgress = this.scattersCount/(this.scattersPerStage * this.stages);
        if (fullProgress > 1) fullProgress = 1;

        for(let i = 0; i < this.respinMarkers.length; i++)
        {
            var marker = this.respinMarkers[i];
            if(i < _stage && !marker.isEnabled) 
            {
                this.setVisible(marker, true);
            }
            else if (i >= _stage)
            {
                this.setVisible(marker, false);
            }
            var fillAmount = fullProgress - i * (1 / this.stages);
            if (fillAmount > 0) marker.progress.setFillAmount(fillAmount * this.stages);
            else marker.progress.setFillAmount(0);
        }
    }

    showChectMiniGame(){
        this.scene.miniGame = this;
        this.chestBackGround = this.scene.addSpriteLocPos('gray_01', 0, 0).setOrigin(0.5).setScale(1000);
        this.chestBackGround.setDepth(this.depth + 9); 
        this.chestBackGround.setInteractive(); // block bottom controls

        this.rightChestButton.setDepth(this.depth + 10); 
        this.leftChestButton.setDepth(this.depth + 10); 

        this.leftChestButton.setInteractable(true);
        this.rightChestButton.setInteractable(true);

        this.chestText = this.scene.addSpriteLocPos('chest_text', 0, 0).setOrigin(0.5).setScale(1);// this.scene.add.bitmapText(this.scene.centerX, this.scene.centerY, 'gameFont_2', 'Select a chest      \n              with a gift', 120, 1).setOrigin(0.5);
        this.chestText.depth = this.depth + 10;
        this.scaleAnim(this.chestText, ()=>{});
    }

    hideChestMiniGame()
    {
        this.chestBackGround.destroy();
        this.scene.miniGame = null;

        this.rightChestButton.setDepth(this.depth + 1); 
        this.leftChestButton.setDepth(this.depth + 1); 

        this.leftChestButton.setInteractable(false);
        this.rightChestButton.setInteractable(false);
        if(this.chestText != null) this.chestText.destroy();
    }

    resetChests()
    {
        this.leftChestButton.release();
        this.rightChestButton.release();       
    }

    chestClickHand(left)
    {
        if(this.chestText != null) this.chestText.destroy();
        this.hideChestMiniGame();
        this.scene.soundController.playClip('box_click_clip');
        var winCoins = left ? this.leftChestButton.giftCoins : this.rightChestButton.giftCoins;
        this.showChestWinMessage(winCoins, 0, slotConfig.winMessageTime);
    }

    setChestsGift(newStage)
    {
       var left =  Phaser.Math.Between(0, 1) == 0;
       var coins = this.respinMarkers[newStage].chestCoins;
       if(left){
            this.leftChestButton.giftCoins = coins;
            this.rightChestButton.giftCoins = Math.floor(coins / 10);
       }
       else{
            this.leftChestButton.giftCoins = Math.floor(coins / 10);
            this.rightChestButton.giftCoins = coins;
        }
    }

    showEmptyPU(time)
    {    
        var pu = this.scene.guiController.showPopUp(slotConfig.createEmptyPUHandler);
        if(time && time > 0) this.timeout_emp = setTimeout(()=>{
            this.scene. guiController.closePopUp(pu); 
            if(this.timeout_emp) clearTimeout(this.timeout_emp);}, time);
    }

    showChestWinMessage(winCoins, winSpins, time)
    {  
        this.scene.slotPlayer.addCoins(winCoins);
        this.scene.slotControls.addFreeSpins(winSpins);
        
        // create message text string  
        var messText = '';
        if (winCoins > 0 && winSpins > 0){
            messText = '' + winCoins + ' coins, ' + winSpins + ' free spins!';  // 'Your win: ' 
            this.showCoins(time);
        }
        else if(winCoins > 0 )
        {
            messText = '' + winCoins + ' coins!'; 
            this.showCoins(time);
        }
        else if(winSpins > 0 )
        {
            messText = ''  + winSpins + ' free spins!';
        }

        var wMess = this.scene.guiController.showPopUp(slotConfig.createChestWinPUHandler);
        wMess.messageText.text = messText;
        if(time && time > 0) this.timeoutMessCW = setTimeout(()=>{this.scene.guiController.closePopUp(wMess); if(this.timeoutMessCW) clearTimeout(this.timeoutMessCW);}, time);
    }

    showCoins(time){
        this.scene.soundController.playClip('wincoins_clip', false);   
        this.scene.showCoins(true);
        if(time && time > 0) this.timeoutSC = setTimeout(()=>{
            this.scene.showCoins(false); 
            if(this.timeoutMessSC) clearTimeout(this.timeoutMessSC);}, time);
    }

    scaleAnim(sprite, completeCallback){
        if(sprite == null) return;
        new SimpleTweenFloat(sprite, 0, 2 * Math.PI, 1000, 
            (p, dp)=>{ if(sprite != null) sprite.setScale(1 + 0.5 * Math.sin(p)); }, 
            ()=>{
                completeCallback();
            } );
    }
}

class ProgressSlider
{
    constructor(scene, baseLocPosX, baseLocPosY, baseSprite, fillLocPosX, fillLocPosY, fillSprite, spotSprite, depth)
    {
        this.fillAmount = 0;
        this.scene = scene;
        this.fillLocPosX = fillLocPosX;
        this.fillLocPosY = fillLocPosY;
        this.baseSprite = scene.addSpriteLocPos(baseSprite, baseLocPosX, baseLocPosY); 
        this.baseSprite.setDepth(depth);
        this.fillSprite = scene.addSpriteLocPos(fillSprite, fillLocPosX, fillLocPosY); 
        this.fillSprite.setDepth(depth + 1);

        this.sizeX = this.fillSprite.width;
        this.sizeY = this.fillSprite.height;
        // console.log('mask sizeX: ' + sizeX  + ' ;mask sizeY: ' + sizeY);

        this.spotSprite = scene.addSpriteLocPos(spotSprite, fillLocPosX - this.sizeX / 2, fillLocPosY); 
        this.spotSprite.setDepth(depth + 2);

        this.shapePosX = scene.centerX + fillLocPosX - this.sizeX / 2;
        this.shapePosY = scene.centerY + fillLocPosY + this.sizeY / 2;
        this.shape = scene.add.graphics();
        this.shape.fillStyle(0xffffff);
        this.shape.beginPath();
        this.shape.fillRect(this.shapePosX, this.shapePosY, this.sizeX, -this.sizeY);
        this.shape.depth = depth + 2;
        this.shape.setVisible(false);

        this.gMask = this.shape.createGeometryMask();
        this.fillSprite.setMask(this.gMask);   

        this.setFillAmount(this.fillAmount);
    }

    setFillAmount(amount)
    {
        if(amount > 1) amount = 1;
        if(amount < 0) amount = 0;
        this.fillAmount = amount;
        var _sizeX = this.sizeX * amount;
        this.shape.clear();
        this.shape.fillRect(this.shapePosX, this.shapePosY, _sizeX, -this.sizeY);  
        this.spotSprite.setPosition(this.shapePosX +_sizeX, this.scene.centerY + this.fillLocPosY);
        this.spotSprite.setVisible(this.fillAmount > 0);
    }
}
