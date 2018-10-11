# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_11_161102) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "dog_types", force: :cascade do |t|
    t.integer "dog_id", null: false
    t.integer "type_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dog_id"], name: "index_dog_types_on_dog_id"
    t.index ["type_id"], name: "index_dog_types_on_type_id"
  end

  create_table "dogs", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "hypoallergenic", default: false, null: false
    t.boolean "sheds", default: false, null: false
    t.boolean "good_with_kids", default: false, null: false
    t.string "address_line_one", null: false
    t.string "address_line_two"
    t.string "zip_code", null: false
    t.string "state", null: false
    t.string "city", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "temperment", null: false
    t.index ["address_line_one"], name: "index_dogs_on_address_line_one", unique: true
    t.index ["lat", "lng"], name: "index_dogs_on_lat_and_lng", unique: true
    t.index ["lng"], name: "index_dogs_on_lng"
    t.index ["name"], name: "index_dogs_on_name", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.text "body", null: false
    t.integer "rating", null: false
    t.integer "dog_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["dog_id"], name: "index_reviews_on_dog_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "types", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_types_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "zipcode", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
