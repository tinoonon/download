"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const LUA_SNIPPETS = [
  `-- @system: DevLab Advanced Banking Core
-- @framework: QBCore / ESX
local banking = exports['qb-banking']

RegisterNetEvent('devlab:server:processTransaction', function(amount, type)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    
    if not Player then return end
    
    if Player.Functions.GetMoney('cash') >= amount then
        Player.Functions.RemoveMoney('cash', amount)
        TriggerClientEvent('ox_lib:notify', src, {
            title = 'Banco DevLab',
            description = 'Transação de R$ ' .. amount .. ' processada.',
            type = 'success',
            position = 'top-right'
        })
        -- Logs para auditoria administrativa
        exports['devlab-logs']:send('transacoes', 'Player ' .. Player.PlayerData.name .. ' sacou R$' .. amount)
    else
        print('^1[ALERTA]^7 Tentativa de exploit detectada: ' .. GetPlayerName(src))
    end
end)`,
  `-- @module: Proximity Interaction System
-- @optimization: 0.01ms idle
Citizen.CreateThread(function()
    while true do
        local sleep = 1000
        local playerPed = PlayerPedId()
        local coords = GetEntityCoords(playerPed)
        
        for k, v in pairs(Config.Interactions) do
            local dist = #(coords - v.coords)
            if dist < 10.0 then
                sleep = 0
                DrawMarker(2, v.coords.x, v.coords.y, v.coords.z + 0.5, 0,0,0,0,0,0, 0.2, 0.2, 0.2, 0, 191, 255, 150, false, false, 2, true, nil, nil, false)
                if dist < 1.5 then
                    exports['text_ui']:show('Pressione [~g~E~w~] para abrir o menu', 'left')
                    if IsControlJustReleased(0, 38) then
                        TriggerEvent('devlab:client:openMenu', k)
                    end
                end
            end
        end
        Citizen.Wait(sleep)
    end
end)`,
  `-- @data: High-Performance Database Sync
-- @driver: oxmysql
exports.oxmysql:execute('SELECT * FROM players_metadata WHERE citizenid = ?', {
    ['@citizenid'] = Player.PlayerData.citizenid
}, function(result)
    if result and result[1] then
        local meta = json.decode(result[1].data)
        print('^2[DEVLAB]^7 Cache carregado: ' .. Player.PlayerData.name)
        
        Player.Functions.SetMetaData('stress', meta.stress)
        Player.Functions.SetMetaData('crafting_level', meta.lvl)
        
        TriggerClientEvent('devlab:init_ui', source, meta)
    else
        -- Inicializa novo perfil se não existir
        exports.oxmysql:insert('INSERT INTO players_metadata (citizenid, data) VALUES (?, ?)', {
            Player.PlayerData.citizenid,
            json.encode(Config.DefaultMeta)
        })
    end
end)`,
  `-- @feature: Advanced Vehicle Management
-- @logic: Fuel and Engine Damage Sync
AddEventHandler('devlab:client:checkVehicleState', function(vehicle)
    local engineHealth = GetVehicleEngineHealth(vehicle)
    local fuelLevel = exports['LegacyFuel']:GetFuel(vehicle)
    
    if engineHealth < 300.0 then
        SetVehicleEngineOn(vehicle, false, true, true)
        exports['mythic_notify']:DoCustomHudText('error', 'O motor está seriamente danificado!')
    end
    
    if fuelLevel < 5.0 then
        SetVehicleEngineOn(vehicle, false, true, true)
        exports['mythic_notify']:DoCustomHudText('warning', 'O tanque está quase vazio.')
    end
end)`,
  `-- @inventory: Custom Item Logic
-- @item: 'adrenaline_shot'
QBCore.Functions.CreateUseableItem('adrenaline_shot', function(source, item)
    local Player = QBCore.Functions.GetPlayer(source)
    if not Player.Functions.GetItemByName(item.name) then return end

    TriggerClientEvent('devlab:client:useAdrenaline', source)
    Player.Functions.RemoveItem(item.name, 1)
    
    TriggerClientEvent('devlab:client:applyBuff', source, {
        stamina = 1.0,
        health_regen = 0.5,
        duration = 60000 -- 1 minuto
    })
end)`
];

export function CodeTerminal() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(30);

  useEffect(() => {
    const handleTyping = () => {
      const currentSnippet = LUA_SNIPPETS[snippetIndex];
      
      if (!isDeleting) {
        setDisplayText(currentSnippet.substring(0, displayText.length + 1));
        setTypingSpeed(25);

        if (displayText === currentSnippet) {
          setTimeout(() => setIsDeleting(true), 4000);
        }
      } else {
        setDisplayText(currentSnippet.substring(0, displayText.length - 1));
        setTypingSpeed(10);

        if (displayText === "") {
          setIsDeleting(false);
          setSnippetIndex((prev) => (prev + 1) % LUA_SNIPPETS.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, snippetIndex, typingSpeed]);

  return (
    <div className="w-full max-w-5xl mx-auto glass-morphism rounded-xl border border-white/10 overflow-hidden shadow-2xl flex flex-col group hover:border-primary/50 transition-all duration-500 bg-[#0a0a0a]">
      {/* Terminal Header */}
      <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center">
        <div className="flex gap-2 w-24">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[10px] text-white/40 font-mono tracking-[0.2em] uppercase font-bold">
            devlab_studio_core.lua
          </span>
        </div>
        <div className="w-24 text-right">
          <span className="text-[10px] text-primary/40 font-mono font-bold">LUA 5.4</span>
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="flex-1 p-6 md:p-10 font-mono text-xs sm:text-sm md:text-base leading-relaxed overflow-hidden relative min-h-[450px] md:min-h-[550px]">
        <div className="absolute inset-0 bg-primary/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        <pre className="text-white/90 whitespace-pre-wrap font-code text-left">
          <span className="text-primary font-bold">devlab@studio:~$ </span>
          {displayText}
          <span className="inline-block w-2.5 h-5 ml-1 bg-primary animate-pulse align-middle" />
        </pre>
      </div>

      {/* Terminal Footer */}
      <div className="bg-white/5 px-6 py-2 border-t border-white/5 flex justify-between items-center text-[10px] text-white/30 font-mono">
        <div className="flex gap-4">
          <span>{displayText.split('\n').length} linhas</span>
          <span>{displayText.length} caracteres</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="hidden sm:inline">UTF-8</span>
          <span className="text-primary font-bold animate-pulse">● LIVE EDITING</span>
        </div>
      </div>
    </div>
  );
}