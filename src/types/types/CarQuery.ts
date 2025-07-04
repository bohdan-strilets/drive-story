export type Make = {
	make_country: string
	make_display: string
	make_id: string
	make_is_common: '1' | '0'
	logoUrl: string
}

export type Model = {
	model_make_id: string
	model_name: string
}

export type CarTrim = {
	model_id: string
	model_make_id: string
	model_name: string
	model_trim: string
	model_year: string
	model_body: string
	model_engine_position: string
	model_engine_cc: string
	model_engine_cyl: string
	model_engine_type: string
	model_engine_valves_per_cyl: string
	model_engine_power_ps: string
	model_engine_power_rpm: string
	model_engine_torque_nm: string
	model_engine_torque_rpm: string
	model_top_speed_kph: string
	model_0_to_100_kph: string
	model_drive: string
	model_transmission_type: string
	model_seats: string
	model_doors: string
	model_weight_kg: string
	model_length_mm: string
	model_width_mm: string
	model_height_mm: string
	model_wheelbase_mm: string
	model_lkm_hwy: string
	model_lkm_mixed: string
	model_lkm_city: string
	model_fuel_cap_l: string
	model_sold_in_us: string
	model_co2: string
	model_make_display: string
	make_country: string
}
