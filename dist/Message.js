"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var Embed_1 = require("./Embed");
var Field_1 = require("./Field");
var Footer_1 = require("./Footer");
var axios_1 = __importDefault(require("axios"));
var Message = /** @class */ (function () {
    function Message(name, webhook) {
        var _this = this;
        this.addContent = function (content) {
            _this.content = content;
            return _this;
        };
        this.addUsername = function (username) {
            _this.username = username;
            return _this;
        };
        this.addImage = function (image) {
            _this.image = image;
            return _this;
        };
        this.addAvatarURl = function (avatar_url) {
            _this.avatar_url = avatar_url;
            return _this;
        };
        this.setColor = function (color) {
            _this.embeds.color = (color && color.toString()) || undefined;
            return _this;
        };
        this.addFooter = function (footer) {
            _this.embeds.footer = new Footer_1.Footer(footer);
            return _this;
        };
        /**
         * TODO: implements author
         *
         * @param author
         * @returns
         */
        // addAuthor = (/* author: string */) => {
        //   // this.embeds.author = author;
        //   return this;
        // };
        this.addDescription = function (description) {
            _this.embeds.description = description;
            return _this;
        };
        this.addTitle = function (title) {
            _this.embeds.title = title;
            return _this;
        };
        this.addField = function (field) {
            var name = field.name, value = field.value, inline = field.inline;
            var fieldObj = new Field_1.Field(name, value, inline);
            _this.embeds.fields.push(fieldObj);
            return _this;
        };
        this.buildPayload = function () {
            var payload = {
                content: _this.content,
                username: _this.username,
                allowed_mentions: {
                    parse: ["everyone"],
                },
                avatar_url: _this.avatar_url,
                embeds: [
                    {
                        author: {
                            name: _this.name,
                        },
                        footer: _this.embeds.footer,
                        description: _this.embeds.description,
                        title: _this.embeds.title,
                        color: _this.embeds.color,
                        image: {
                            url: _this.image,
                        },
                        fields: _this.embeds.fields.map(function (_a) {
                            var name = _a.name, value = _a.value, inline = _a.inline;
                            return { name: name, value: value, inline: inline };
                        }),
                    },
                ],
            };
            // remove all undefined values recursive from payload and return
            return JSON.parse(JSON.stringify(payload));
        };
        this.sendMessage = function () {
            return axios_1.default.post(_this.webhook, _this.buildPayload());
        };
        this.embeds = new Embed_1.Embed();
        this.webhook = webhook;
        this.name = name;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=Message.js.map