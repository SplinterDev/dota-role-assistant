(this["webpackJsonpdota-role-assistant"]=this["webpackJsonpdota-role-assistant"]||[]).push([[47],{65:function(e){e.exports=JSON.parse('{"id":8,"name":"npc_dota_hero_juggernaut","order_id":46,"name_loc":"Juggernaut","bio_loc":"No one has ever seen the face hidden beneath the mask of Yurnero the Juggernaut. It is only speculation that he even has one. For defying a corrupt lord, Yurnero was exiled from the ancient Isle of Masks--a punishment that saved his life. The isle soon after vanished beneath the waves in a night of vengeful magic. He alone remains to carry on the Isle\'s long Juggernaut tradition, one of ritual and swordplay. The last practitioner of the art, Yurnero\'s confidence and courage are the result of endless practice; his inventive bladework proves that he has never stopped challenging himself. Still, his motives are as unreadable as his expression. For a hero who has lost everything twice over, he fights as if victory is a foregone conclusion. ","hype_loc":"In a <b>flurry of slashes</b>, Juggernaut cuts down his foes. Sprinting and <b>spinning into battle</b> with reckless abandon, and nearly invincible once he is able to begin his assault, stopping Juggernaut can often be just as difficult as surviving him.","npe_desc_loc":"Slices through his enemies with precise strikes","str_base":20,"str_gain":2.2000000476837,"agi_base":34,"agi_gain":2.7999999523163,"int_base":14,"int_gain":1.3999999761581,"primary_attr":1,"complexity":1,"attack_capability":1,"role_levels":[2,0,0,0,0,0,1,1,0],"damage_min":50,"damage_max":54,"attack_rate":1.3999999761581,"attack_range":150,"projectile_speed":0,"armor":5.6666669845581,"magic_resistance":25,"movement_speed":305,"turn_rate":0.60000002384186,"sight_range_day":1800,"sight_range_night":800,"max_health":600,"health_regen":2.5,"max_mana":243,"mana_regen":0.69999998807907,"abilities":[{"id":5028,"name":"juggernaut_blade_fury","name_loc":"Blade Fury","desc_loc":"Causes a bladestorm of destructive force around Juggernaut, rendering him immune to magic and dealing damage to nearby enemy units. \\n\\nDISPEL TYPE: Basic Dispel","lore_loc":"Yurnero\'s renowned katana techniques are feared by warriors and sorcerors alike.","notes_loc":["You can use items during Blade Fury.","Juggernaut can still perform attacks while in Blade Fury. However, only units that are not affected by Blade Fury, such as wards or structures, will take damage from these attacks."],"shard_loc":"Increases movement speed during Blade Fury by 100 and attacks a random nearby unit once per second dealing 75% damage.","scepter_loc":"","type":0,"behavior":"4196356","target_team":0,"target_type":0,"flags":0,"damage":2,"immunity":4,"dispellable":3,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[42,34,26,18],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[120,110,100,90],"gold_costs":[],"special_values":[{"name":"blade_fury_damage_tick","values_float":[0.20000000298023],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"blade_fury_radius","values_float":[],"values_int":[260],"is_percentage":false,"heading_loc":"RADIUS:"},{"name":"blade_fury_damage","values_float":[],"values_int":[85,110,135,160],"is_percentage":false,"heading_loc":"DAMAGE:"},{"name":"duration","values_float":[5],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":true,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5029,"name":"juggernaut_healing_ward","name_loc":"Healing Ward","desc_loc":"Summons a Healing Ward which heals all nearby allied units, based on their max health.  The Healing Ward moves at %healing_ward_movespeed_tooltip% movement speed after being summoned.  Lasts %abilityduration% seconds.","lore_loc":"Of the rituals learned at the Isle of Masks, tending wounds with a bit of voodoo magic has proven to be quite useful.","notes_loc":["The healing ward can be controlled.","Multiple healing wards do not stack."],"shard_loc":"","scepter_loc":"","type":0,"behavior":"48","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":1,"dispellable":0,"max_level":4,"cast_ranges":[350],"cast_points":[0.30000001192093,0.30000001192093,0.30000001192093,0.30000001192093],"channel_times":[0,0,0,0],"cooldowns":[60,60,60,60],"durations":[25],"damages":[0,0,0,0],"mana_costs":[140],"gold_costs":[],"special_values":[{"name":"healing_ward_heal_amount","values_float":[],"values_int":[2,3,4,5],"is_percentage":true,"heading_loc":"MAX HEALTH PER SECOND:"},{"name":"healing_ward_aura_radius","values_float":[],"values_int":[500],"is_percentage":false,"heading_loc":""},{"name":"healing_ward_movespeed_tooltip","values_float":[],"values_int":[350],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastRange","values_float":[],"values_int":[350],"is_percentage":false,"heading_loc":""},{"name":"AbilityDuration","values_float":[25],"values_int":[],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.30000001192093,0.30000001192093,0.30000001192093,0.30000001192093],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5027,"name":"juggernaut_blade_dance","name_loc":"Blade Dance","desc_loc":"Gives Juggernaut a chance to deal critical damage on each attack.","lore_loc":"The last remnant of his heritage\'s commitment to bladework, Yurnero ensures that the style is remembered.","notes_loc":[],"shard_loc":"","scepter_loc":"","type":0,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"blade_dance_crit_chance","values_float":[],"values_int":[20,25,30,35],"is_percentage":true,"heading_loc":"CRITICAL CHANCE:"},{"name":"blade_dance_crit_mult","values_float":[],"values_int":[180],"is_percentage":true,"heading_loc":"CRITICAL DAMAGE:"}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":419,"name":"juggernaut_swift_slash","name_loc":"Swiftslash","desc_loc":"Performs a mini Omnislash for a short duration.","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":0,"behavior":"8623489033","target_team":2,"target_type":19,"flags":16,"damage":1,"immunity":3,"dispellable":3,"max_level":1,"cast_ranges":[550],"cast_points":[0.30000001192093,0.30000001192093,0.30000001192093],"channel_times":[0,0,0,0],"cooldowns":[20],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[125],"gold_costs":[],"special_values":[{"name":"duration","values_float":[0.80000001192093],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"AbilityCastRange","values_float":[],"values_int":[550],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.30000001192093,0.30000001192093,0.30000001192093],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":true,"ability_has_shard":false,"ability_is_granted_by_scepter":true,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5030,"name":"juggernaut_omni_slash","name_loc":"Omnislash","desc_loc":"Juggernaut leaps towards the target enemy units, and then slashes the target and other nearby enemy units at an increased attack rate. Juggernaut is invulnerable for the duration.","lore_loc":"\'The fruits of discipline; with practice comes strength.\'","notes_loc":["You can use items during Omnislash.","Can target Spell Immune units.","Omnislash applies a basic dispel to Juggernaut on cast."],"shard_loc":"","scepter_loc":"","type":1,"behavior":"33554440","target_team":2,"target_type":19,"flags":16,"damage":1,"immunity":3,"dispellable":3,"max_level":3,"cast_ranges":[350],"cast_points":[0.30000001192093,0.30000001192093,0.30000001192093],"channel_times":[0,0,0,0],"cooldowns":[140],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[200,275,350],"gold_costs":[],"special_values":[{"name":"attack_rate_multiplier","values_float":[1.5],"values_int":[],"is_percentage":false,"heading_loc":"SLASHES RATE MULTIPLIER:"},{"name":"bonus_damage","values_float":[],"values_int":[30,40,50],"is_percentage":false,"heading_loc":"BONUS DAMAGE:"},{"name":"bonus_attack_speed","values_float":[],"values_int":[40],"is_percentage":false,"heading_loc":"BONUS ATTACK SPEED:"},{"name":"duration","values_float":[3,3.25,3.5],"values_int":[],"is_percentage":false,"heading_loc":"DURATION:"},{"name":"omni_slash_radius","values_float":[],"values_int":[425],"is_percentage":false,"heading_loc":"SLASH JUMP RADIUS:"},{"name":"AbilityCastRange","values_float":[],"values_int":[350],"is_percentage":false,"heading_loc":""},{"name":"AbilityCastPoint","values_float":[0.30000001192093,0.30000001192093,0.30000001192093],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":true,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}],"talents":[{"id":5921,"name":"special_bonus_all_stats_5","name_loc":"+{s:value} All Stats","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[5],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5918,"name":"special_bonus_movement_speed_20","name_loc":"+{s:value} Movement Speed","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[20],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":628,"name":"special_bonus_unique_juggernaut_5","name_loc":"-{s:value}s Healing Ward Cooldown","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[20],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5906,"name":"special_bonus_attack_speed_20","name_loc":"+{s:value} Attack Speed","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[20],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":5934,"name":"special_bonus_armor_8","name_loc":"+{s:value} Armor","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[8],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":7021,"name":"special_bonus_unique_juggernaut_3","name_loc":"+{s:value} Blade Fury DPS","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[160],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":429,"name":"special_bonus_hp_475","name_loc":"+{s:value} Health","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[],"values_int":[475],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0},{"id":6662,"name":"special_bonus_unique_juggernaut_2","name_loc":"+{s:value}s Omnislash Duration","desc_loc":"","lore_loc":"","notes_loc":[],"shard_loc":"","scepter_loc":"","type":2,"behavior":"2","target_team":0,"target_type":0,"flags":0,"damage":0,"immunity":0,"dispellable":0,"max_level":4,"cast_ranges":[0],"cast_points":[0,0,0,0],"channel_times":[0,0,0,0],"cooldowns":[0,0,0,0],"durations":[0,0,0,0],"damages":[0,0,0,0],"mana_costs":[0,0,0,0],"gold_costs":[],"special_values":[{"name":"value","values_float":[1],"values_int":[],"is_percentage":false,"heading_loc":""}],"is_item":false,"ability_has_scepter":false,"ability_has_shard":false,"ability_is_granted_by_scepter":false,"ability_is_granted_by_shard":false,"item_cost":0,"item_initial_charges":0,"item_neutral_tier":4294967295,"item_stock_max":0,"item_stock_time":0,"item_quality":0}]}')}}]);
//# sourceMappingURL=47.360e1115.chunk.js.map