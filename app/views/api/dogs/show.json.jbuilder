# json.dog @dog, :id, :name, :hypoallergenic, :sheds, :good_with_kids,
# :address_line_one, :address_line_two, :zip_code, :state, :city, :lat, :lng, :temperment

json.dog do
  json.extract! @dog, :id, :name, :hypoallergenic, :sheds, :good_with_kids,
  :address_line_one, :address_line_two, :zip_code, :state, :city, :lat, :lng, :temperment
  json.dogPhotos @dog.photos do |photo|
    json.url url_for(photo)
  end
end

json.types @dog.types, :id, :name

json.dogTypes @dog.dog_types, :id, :dog_id, :type_id

json.reviews @dog.reviews, :id, :body, :rating, :user_id, :dog_id
