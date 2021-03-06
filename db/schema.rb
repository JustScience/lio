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

ActiveRecord::Schema.define(version: 20170623030202) do

  create_table "contacts", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.text   "message"
    t.string "nickname"
  end

  create_table "projects", force: :cascade do |t|
    t.string   "title"
    t.string   "role"
    t.string   "client"
    t.date     "date"
    t.string   "link"
    t.text     "description"
    t.string   "catergory"
    t.string   "hero_1"
    t.string   "hero_2"
    t.string   "hero_3"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.string   "tech"
    t.string   "hero_4"
    t.date     "end_date"
    t.string   "logo"
    t.string   "image_1"
    t.string   "image_2"
    t.string   "image_3"
    t.string   "image_4"
    t.string   "hero_5"
    t.text     "responsibility"
    t.string   "feature_1"
    t.string   "feature_2"
    t.string   "feature_3"
    t.string   "feature_4"
  end

end
