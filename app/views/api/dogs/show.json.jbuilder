json.dog @dog, :id, :name, :hypoallergenic, :sheds, :good_with_kids,
:address_line_one, :address_line_two, :zip_code, :state, :city, :lat, :lng, :temperment

json.types @dog.types, :id, :name

json.dogTypes @dog.dog_types, :id, :dog_id, :type_id
